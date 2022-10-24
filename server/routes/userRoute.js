const express = require('express');
const stravaController = require('../controllers/stravaController');
const userController = require('../controllers/userController');
const passport = require('passport');
const flash = require('connect-flash');

const userRouter = express.Router();

userRouter.get(
  '/',
  userController.getUser,
  stravaController.fetch,
  (req, res, next) => {
    return res.status(200).send(res.locals.user);
  }
);
module.exports = userRouter;
