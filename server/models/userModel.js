const mongoose = require('mongoose');
const Schema = mongoose.Schema;








const componentSchema = new Schema({
    componentName: String,
    currentHours: Number,
    serviceInterval: Number,
    percentage: Number,
    iconLink: String,
})

const Component = mongoose.model('component', componentSchema);

const bikeSchema = new Schema({
    bikeName: String,
    id: {type: Number, unique: true},
    picLink: String,
    totalMiles: Number,
    totalElevation: Number,
    recentHours: Number,
    totalHours: Number,
    bikeComponents: [componentSchema],
    recentRides: [{}]
})

const Bike = mongoose.model('bike', bikeSchema);

const userSchema = new Schema({
    id: Number,
    username: {type: String, unique: true},
    password: String,
    lastSignIn: Number,
    bikes: [bikeSchema],
})

const User = mongoose.model('user', userSchema);

module.exports = {
    User,
    Bike,
    Component,
}