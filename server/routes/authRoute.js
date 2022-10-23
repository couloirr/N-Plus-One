const express = require('express');
const authController = require('../controllers/authController');
const passport = require('../models/passportConfig');

// /**
//  * https://github.com/Riderize/passport-strava-oauth2/blob/master/example/app.js
//  */
const authRouter = express.Router();
authRouter.get(
  '/strava',
  passport.authenticate('strava', {
    scope: ['profile:read_all,activity:read_all'],
    session: true,
  })
);
authRouter.get('/error', (req, res, next) => {
  return res.send('Error in Strava Auth');
});

authRouter.get(
  '/strava/callback',
  passport.authenticate('strava', {
    failureRedirect: '/error',
  }),
  authController.addUser
);

module.exports = authRouter;
