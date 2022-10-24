const express = require('express');
const authController = require('../controllers/authController');
const stravaController = require('../controllers/stravaController');
const passport = require('passport');
require('dotenv').config();

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
    // console.log(req.session);›
    const id = encodeURIComponent(`${req.user.id}`);
    const token = encodeURIComponent(`${req.user.token}`);
    return res.redirect(
      `http://localhost:8080/authenticate/?id=${id}&token=${token}`
    );
    // res.status(200).send(res.locals.user);
  }
);

module.exports = authRouter;
