const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const stravaController = require('./controllers/strava');
const authRouter = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const MONGO_URI = 'mongodb://localhost/Users';
mongoose.connect(MONGO_URI);

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

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

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`, process.env.STRAVA_CLIENT_ID)
);
