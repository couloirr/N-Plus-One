const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();
mongoose
  .connect(process.env.MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'NPlusOneUsers',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
const bikeDefault = {
  bikeName: 'Your Bike',
  totalMiles: 0,
  totalElevation: 0,
  recentHours: 0,
  totalHours: 0,
};
const partsDefault = [
  { componentName: 'Fork', currentHours: 0, serviceInterval: 200 },
  { componentName: 'Rear Shock', currentHours: 0, serviceInterval: 100 },
  { componentName: 'Drive Train', currentHours: 0, serviceInterval: 500 },
  { componentName: 'Brakes', currentHours: 0, serviceInterval: 400 },
];
const currentDate = Date.now();
const componentSchema = new Schema({
  componentName: String,
  currentHours: Number,
  serviceInterval: Number,
  percentage: Number,
  iconLink: String,
});

const Component = mongoose.model('component', componentSchema);

const bikeSchema = new Schema({
  bikeName: String,
  picLink: String,
  bikeComponents: { type: [componentSchema], default: partsDefault },
});

const Bike = mongoose.model('bike', bikeSchema);

const userSchema = new Schema({
  stravaId: Number,
  name: String,
  lastSignIn: Date,
  bikes: { type: [bikeSchema], default: bikeDefault },
  totalMiles: { type: Number, default: 0 },
  totalElevation: { type: Number, default: 0 },
  totalHours: { type: Number, default: 0 },
  recentRides: [],
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User,
  Bike,
  Component,
};
