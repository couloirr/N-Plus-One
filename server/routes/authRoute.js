// const express = require('express');
// const passport = require('passport');
// const authRouter = express.Router();
// const StravaStrategy = require('passport-strava').Strategy;
// authRouter.use(express.json());
// authRouter.use(passport.initialize());
// // authRouter.use(passport.session());
// require('dotenv').config();
// /**
//  * https://github.com/Riderize/passport-strava-oauth2/blob/master/example/app.js
//  */
// // passport.serializeUser(function (user, done) {
// //   done(null, user);
// // });
// // passport.deserializeUser(function (obj, done) {
// //   done(null, obj);
// // });
// passport.use(
//   new StravaStrategy(
//     {
//       clientID: process.env.STRAVA_CLIENT_ID,
//       clientSecret: process.env.SECRET_CLIENT_SECRET,
//       callbackURL: process.env.STRAVA_CALLBACK,
//     },
//     function (accessToken, refreshToken, profile, done) {
//       console.log(profile);
//       return done(null, profile);
//       //   User.findOrCreate({ stravaId: profile.id }, function (err, user) {
//       //     return done(err, user);
//       //   });
//     }
//   )
// );
// authRouter.get(
//   '/',
//   passport.authenticate('strava', {
//     scope: ['profile:read_all,activity:read_all'],
//   })
// );
// // authRouter.get('/', (req, res) => {
// //   return res.status(200).send('successful response');
// // });

// authRouter.get(
//   '/callback',
//   passport.authenticate('strava', {
//     failureRedirect: '/loggedin',
//     successRedirect: '/loggedin',
//   }),
//   (req, res) => {
//     return res.status(200).send(req);
//   }
// );
// authRouter.get('/loggedin', (req, res) => {
//   // return res.status(200).send('logged in');
//   return res.redirect('/home');
// });
// // favoritesRouter.get(
// //   '/',
// //   favoritesController.getFavorites,
// //   (req: Request, res: Response) => {
// //     return res.status(200).send(res.locals.favorites);
// //   }
// // );
// // favoritesRouter.post(
// //   '/',
// //   favoritesController.addFavorite,
// //   (req: Request, res: Response) => {
// //     return res.status(200).send(res.locals.favorites);
// //   }
// // );
// // favoritesRouter.put(
// //   '/',
// //   favoritesController.deleteFavorite,
// //   (req: Request, res: Response) => {
// //     return res.status(200).send(res.locals.favorites);
// //   }
// // );
// module.exports = authRouter;
