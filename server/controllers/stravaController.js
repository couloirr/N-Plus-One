const fetch = require('node-fetch');
const models = require('../models/userModel');
const stravaApi = require('strava-v3');

const stravaController = {};
//fetches rides since last login, adds them to recent ride on user and calculates new user totals
stravaController.fetch = async (req, res, next) => {
  try {
    const userDoc = res.locals.user;
    const { id, token } = req.query;
    console.log(id, 'in fetch');
    const strava = new stravaApi.client(token);
    const options = {};
    if (userDoc.lastSignIn) {
      options.before = userDoc.lastSignIn;
    }
    const userActivities = await strava.athlete.listActivities(options);
    const dataObj = dataReducer(userActivities);
    userDoc.totalMiles += dataObj.totalMiles;
    userDoc.totalHours += dataObj.movingTime;
    userDoc.totalElevation += dataObj.elevationGain;
    if (!userDoc.lastSignIn)
      userDoc.recentRides.push(
        ...userActivities.slice(userActivities.length - 6)
      );
    else userDoc.recentRides.push(...userActivities);
    userDoc.lastSignIn = Date.now();
    await userDoc.save();
    const currentUser = await models.User.findOne({ stravaId: id });
    res.locals.user = currentUser;
    return next();
  } catch (err) {
    next({
      log: `error in strava controller Fetch: ${err}`,
      status: 500,
      message: 'error occurred in strava controller while fetching athlete',
    });
  }
};

function dataReducer(data) {
  let totalsObj = {
    totalMiles: 0,
    movingTime: 0,
    elevationGain: 0,
  };

  data.forEach((el) => {
    const { distance, moving_time, elapsed_time, total_elevation_gain } = el;

    totalsObj.totalMiles += Math.floor(distance / 1609);
    totalsObj.movingTime += moving_time / 2600;
    totalsObj.elevationGain += total_elevation_gain * 3.281;
  });
  totalsObj.movingTime = Math.round(totalsObj.movingTime * 10) / 10;
  totalsObj.elevationGain = Math.round(totalsObj.elevationGain * 10) / 10;
  return totalsObj;
}

module.exports = stravaController;
