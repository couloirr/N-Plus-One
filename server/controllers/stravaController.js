const fetch = require('node-fetch')
const models = require('../models/userModel')


const stravaController = {}


// stravaController.fetch = async function (req,res,next){
//     const headers = {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//     }

//     const body = JSON.stringify({
//         client_id: "92648",
//         client_secret: "c357a9d6f18ce8b251f7aeb1c99d81e07da2759c",
//         refresh_token: "41476260790b926ab2028c1a9d7b6954c2f8e2ed",
//         grant_type: 'refresh_token',
//     })
//     // const oathBody = JSON.stringify({
//     //     client_id: "92648",
//     //     client_secret: "c357a9d6f18ce8b251f7aeb1c99d81e07da2759c",
//     //     code: "fd90221c67a6f62c06164363fbeda5f1bb8ce6f6",
//     //     grant_type: 'authorization_code',
//     // })
//     // const authorizeResponse = await fetch('https://www.strava.com/oauth/token',{
//     //     method:'post',
//     //     "headers": headers,
//     //     "body": oathBody
//     // })

//     const reauthorizeResponse = await fetch('https://www.strava.com/oauth/token', {
//         method: 'post',
//         "headers": headers,
//         "body": body,
//     })
//     // const authJson = await authorizeResponse.json()
//     const reAuthJson = await reauthorizeResponse.json()
//     console.log('re:' , reAuthJson);
//     const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=` + reAuthJson.access_token)
//     const json = await response.json()
//     console.log('json',json)
//     // const { count, distance } = json.all_run_totals
//     // const movingTime = json.all_run_totals.moving_time
//     // console.log(json)
//     res.locals.data = json;
//     return next();
//     // return res.status(200).json({
//     //     count,
//     //     distance,
//     //     movingTime
//     // })
// }

const clientID = "92648";
const clientSecret = "c357a9d6f18ce8b251f7aeb1c99d81e07da2759c"

const refreshToken = "f234bb1f124b29fa010a70500b6b0af7318848d2"
const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`

stravaController.fetch = async(req, res, next) => {
    fetch(callRefresh,{
        method: 'Post'
    })
    .then(res => res.json())
    .then(result => getActivities(result.access_token))


    function getActivities(access){
        // console.log(callActivities + access)
          fetch(callActivities + access)
          .then(res => res.json())
          .then(data => {
            res.locals.data = data
            console.log('data fetched')
            return next()
        })
          .catch(e => console.log('error fetching from strava',e))
         
      }
      

}


stravaController.parseData =  async(req, res, next) => {

    console.log('in parse data')
    const data = await res.locals.data;
    console.log('after data')
    const dataObj = dataReducer(data);
    console.log('dataobj')
    res.locals.totals = dataObj
    console.log('data parsed')
    return next()




    function dataReducer(activities){
        let totalsObj = {
            totalMiles: 0,
            movingTime: 0,
            elevationGain: 0,
        };
       
        data.forEach((el) => {
            const {distance, moving_time, elapsed_time, total_elevation_gain} = el;
    
            totalsObj.totalMiles += Math.floor(distance / 1609);
            totalsObj.movingTime += (moving_time / 2600)
            totalsObj.elevationGain += (total_elevation_gain * 3.281 )
    
        })
        totalsObj.movingTime = Math.round(totalsObj.movingTime * 10) / 10
        totalsObj.elevationGain = Math.round(totalsObj.elevationGain * 10) / 10
        return totalsObj;
    }
}


stravaController.addData = async (req,res,next)=>{
    const username = 'admin';
    const currentUser = await models.User.findOne({username:username});
    const currentBike = currentUser.bikes[0]
    console.log('found user')
    const totals = res.locals.totals;
    const data = res.locals.data;

    const recentFive = data.slice(0,6);
    console.log('data sliced')
    currentBike.totalHours = totals.movingTime;
    currentBike.totalElevation = totals.elevationGain
    currentBike.totalMiles  = totals.totalMiles
    currentBike.recentRides = recentFive;


    const componentsArr = currentBike.bikeComponents;
    componentsArr.forEach(element => {
        element.currentHours = totals.movingTime;
    });

    const updated = await currentUser.save();
    console.log('data updated and saved')

    res.locals.user = updated;

    return next();
}
module.exports = stravaController;