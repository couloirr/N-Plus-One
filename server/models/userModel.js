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
  id: { type: Number, unique: true },
  picLink: String,
  totalMiles: Number,
  totalElevation: Number,
  recentHours: Number,
  totalHours: Number,
  bikeComponents: [componentSchema],
  recentRides: [{}],
});

const Bike = mongoose.model('bike', bikeSchema);

const userSchema = new Schema({
  stravaId: Number,
  name: String,
  lastSignIn: Date,
  bikes: [bikeSchema],
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User,
  Bike,
  Component,
};
