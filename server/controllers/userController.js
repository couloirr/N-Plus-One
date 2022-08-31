const models = require('../models/userModel');

const userController = {};

userController.getUser = (req,res,next) => {
    const id = 2;
    models.User.findOne({id}).exec()
    .then(userDocs => {
        res.locals.user = userDocs;
        return next();
    })
    .catch(err => {
        return next({
            log: `userController.getUsers: ERROR:${err} `,
            message: {err: 'Error occured in user controller get user'}
        })
    })
};

userController.createUser = (req,res,next) => {
    const id = 3,
    username = 'admin',
    password = 'password',
    lastSignIn = Date.now()
    

    models.User.create({
        id: id,
        username: username,
        password: password,
        lastSignIn: lastSignIn,
    },
    (err, user) => {
        if(err){
            return next(`Error in create user ${err}`);
        }else{
            res.locals.user = user;
            return next()
        }
    }
    );
}


userController.createBike = async (req, res, next) => {
    const id = res.locals.user;
    const name = 'Santa Cruz Bronson'
    const currentUser = await models.User.findById(id);
    
    
    // console.log(currentUser);
    
    currentUser.bikes.push({
                bikeName: 'Santa Cruz Bronson',
                totalMiles: 2000,
                totalElevation: 50000,
                recentHours: 0,
                totalHours: 6000,
    })
    const updated = await currentUser.save();
    const bikeTotal = updated.bikes.length - 1;
    const bikeIndex = updated.bikes[bikeTotal]._id;
    res.locals.bike = bikeIndex;
    // console.log(res.locals.bike, 'bike id');
    return next();    
}

userController.createComponent = async (req, res, next) => {
    const bikeId = res.locals.bike;
    const userId = res.locals.user;
    // console.log(bikeId)
    const currentUser = await models.User.findById(userId)
    const currentBike = currentUser.bikes.id(bikeId);
    // console.log('current bike:', currentBike.bikeComponents)
    // const currentBike = await currentUser.models.Bike.findById(bikeId);
    // console.log('current bike', currentBike);

    const parts = [
        {componentName: 'fork', currentHours: 0, serviceInterval: 20},
        {componentName: 'rear shock', currentHours: 0, serviceInterval: 20},
        {componentName: 'Drive Train', currentHours: 0, serviceInterval: 20},
        {componentName: 'Brakes', currentHours: 0, serviceInterval: 20},

    ]

    // currentBike.bikeComponents.push( {componentName: 'fork', currentHours: 0, serviceInterval: 20}) 
    currentBike.bikeComponents.push(parts[0]) 
    currentBike.bikeComponents.push(parts[1]) 
    currentBike.bikeComponents.push(parts[2]) 
    currentBike.bikeComponents.push(parts[3]) 




const updated = await currentUser.save();
const updatedLength = updated.bikes.length - 1;
// console.log('updated', updated.components)
res.locals.bikeComponents = updated.bikes[updatedLength].bikeComponents;
res.locals.user = updated;
// console.log('updated components:', res.locals.bikeComponents)
return next();



}

userController.verifyUser = async (req, res, next) =>{
    const username = 'admin';

    const currentUser = await models.User.findOne({username:username});
    const userId = currentUser._id;

    res.locals.user = userId;
    // console.log('userID', userId);
    return next()

}

userController.getUser = async (req, res, next) => {
    const username = 'admin';
    const currentUser = await models.User.findOne({username:username});

    res.locals.user = currentUser;

    return next()

}



module.exports = userController;