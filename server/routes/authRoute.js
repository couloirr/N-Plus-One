const express = require('express');
const authController = require('../controllers/authController');
// const passport = require('../models/passportConfig');
const passport = require('passport');
const StravaStrategy = require('@riderize/passport-strava-oauth2').Strategy;
require('dotenv').config();
// const UserDetails = require('../models/userDetails');
// /**
//  * https://github.com/Riderize/passport-strava-oauth2/blob/master/example/app.js
//  */

const authRouter = express.Router();

authRouter.get(
  '/strava',
  passport.authenticate('strava', {
    scope: ['profile:read_all,activity:read_all'],
  })
);
authRouter.get('/error', (req, res, next) => {
  return res.send('Error in Strava Auth');
});
authRouter.get('/success', (req, res, next) => {
  return res.send('success in Strava Auth');
});

authRouter.get(
  '/strava/callback',
  passport.authenticate('strava', { failureRedirect: '/error' }),
  authController.addUser,
  (req, res, next) => {
    console.log(req.session);
    res.status(200).send(res.locals.user);
  }
);

module.exports = authRouter;
