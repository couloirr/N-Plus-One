const passport = require('passport');
const StravaStrategy = require('passport-strava').Strategy;
require('dotenv').config();

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

module.exports = passport;
