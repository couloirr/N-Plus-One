const Session = require('../models/sessionModel');
// const cookieParser = require('cookie-parser');
const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  const sessionCookie = req.cookies.ssid;
  // console.log(req.cookies,'is lodded in cookies')
  Session.findOne({ cookieId: sessionCookie })
    .then((session) => {
      if (!session) return res.redirect('/signup');
      next();
    })
    .catch((err) => next(err));
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  //write code here
  Session.create({
    cookieId: res.locals.id,
  })
    .then(() => next())
    .catch((err) => next({ err }));
};

module.exports = sessionController;
