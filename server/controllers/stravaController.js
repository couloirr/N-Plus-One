const fetch = require('node-fetch');
const models = require('../models/userModel');
const stravaApi = require('strava-v3');

const stravaController = {};

stravaController.fetch = async (req, res, next) => {
  try {
    const { stravaId, token } = req.session.passport.user;
    const strava = new stravaApi.client(token);
    const userActivities = await strava.athlete.listActivities({});
    const dataObj = dataReducer(userActivities);
    console.log(dataObj);
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

stravaController.addData = async (req, res, next) => {
  const username = 'admin';
  const currentUser = await models.User.findOne({ username: username });
  const currentBike = currentUser.bikes[0];
  console.log('found user');
  const totals = res.locals.totals;
  const data = res.locals.data;

  const recentFive = data.slice(0, 6);
  console.log('data sliced');
  currentBike.totalHours = totals.movingTime;
  currentBike.totalElevation = totals.elevationGain;
  currentBike.totalMiles = totals.totalMiles;
  currentBike.recentRides = recentFive;

  const componentsArr = currentBike.bikeComponents;
  componentsArr.forEach((element) => {
    element.currentHours = totals.movingTime;
  });

  const updated = await currentUser.save();
  console.log('data updated and saved');

  res.locals.user = updated;

  return next();
};
module.exports = stravaController;
