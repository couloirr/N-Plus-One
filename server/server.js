const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const authRouter = require('./routes/authRoute');
// const UserDetails = require('./models/userDetails');
const StravaStrategy = require('@riderize/passport-strava-oauth2').Strategy;
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'running a marathon',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));
app.get('*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () =>
  console.log(`Listening on port ${port}`, process.env.STRAVA_CLIENT_SECRET)
);

module.exports = app;
