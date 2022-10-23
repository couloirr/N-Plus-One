import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  // cookieSession({
  //   name: 'Strava-auth-session',
  //   secret: process.env.SESSION_SECRET || '',
  // })
  session({
    secret: process.env.SESSION_SECRET || '',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

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
  console.log(`Listening on port ${port}`, process.env.STRAVA_CLIENT_ID)
);

export default app;
