const model = require('../models/userModel');
const passport = require('passport');
const StravaStrategy = require('@riderize/passport-strava-oauth2').Strategy;
const authController = {};
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new StravaStrategy(
    {
      clientID: process.env.STRAVA_CLIENT_ID,
      clientSecret: process.env.STRAVA_CLIENT_SECRET,
      callbackURL: process.env.STRAVA_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
authController.isLoggedIn = (req, res, next) => {
  if (!req.user || !req.isAuthenticated())
    return res.status(401).json('Error: User not authorized');
  return next();
};
authController.addUser = async (req, res, next) => {
  const userId = req.user.id;
  const name = req.user.fullName;
  try {
    const query = { stravaId: userId };
    const update = { stravaID: userId, name: name, lastSignIn: Date.now() };
    const options = { upsert: true, new: true, setDefaultsonInsert: true };
    const newUser = await model.User.findOneAndUpdate(query, update, options);
    res.locals.user = newUser;
    return next();
  } catch (err) {
    return next({
      log: `error in auth controller addUser: ${err}`,
      status: 500,
      message: 'error occurred in auth controller addUser',
    });
  }
};
module.exports = authController;
