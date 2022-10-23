import passport from 'passport';
const StravaStrategy = require('passport-strava').Strategy;
import { Profile, Strategy as StravaStrategy } from 'passport-strava';
require('dotenv').config();
import { User } from '../models/userModel';

const stravaSettings = {
  clientID: process.env.STRAVA_CLIENT_ID,
  clientSecret: process.env.SECRET_CLIENT_SECRET,
  callbackURL: process.env.STRAVA_CALLBACK,
};

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new StravaStrategy(
    stravaSettings,
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        return done(null, profile);
      });
    }
  )
);

export const authController = {};

authController.isLoggedIn = (req, res, next) => {
  if (!req.user || !req.isAuthenticated())
    return res.status(401).json('Error: User not authorized');
  return next();
};
authController.addUser = async (req, res, next) => {
  const email = req.user.emails[0].value;
  const userId = req.user.id;
  if (!email)
    return next({
      log: 'email not found on request body',
      status: 400,
      message: 'an error occurred in attempting to get the user ID in addUser',
    });
  try {
    const query = { email };
    const update = { lastSignIn: Date.now() };
    const options = { upsert: true, new: true, setDefaultsonInsert: true };
    const model = await models.User.findOneAndUpdate(query, update, options);
    res.locals.user = model;
    return next();
  } catch (err) {
    return next({
      log: `error in auth controller addUser: ${err}`,
      status: 500,
      message: 'error occurred in auth controller addUser',
    });
  }
};

export default passport;
