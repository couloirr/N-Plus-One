const fetch = require('node-fetch')


const stravaController = {}


stravaController.fetch = async function (req,res,next){
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    const body = JSON.stringify({
        client_id: "92648",
        client_secret: "c357a9d6f18ce8b251f7aeb1c99d81e07da2759c",
        refresh_token: "55daba7ee843a67023c461b7500e3c5453398e65",
        grant_type: 'refresh_token',
    })
    const oathBody = JSON.stringify({
        client_id: "92648",
        client_secret: "c357a9d6f18ce8b251f7aeb1c99d81e07da2759c",
        code: "26809a961fb79c8c618c27980f54d4b49a9fb269",
        grant_type: 'authorization_code',
    })
    const authorizeResponse = await fetch('https://www.strava.com/oauth/token',{
        method:'post',
        "headers": headers,
        "body": oathBody
    })

    const reauthorizeResponse = await fetch('https://www.strava.com/oauth/token', {
        method: 'post',
        "headers": headers,
        "body": body,
    })
    const authJson = await authorizeResponse.json()
    const reAuthJson = await reauthorizeResponse.json()
    console.log(authJson);
    const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=` + reAuthJson.access_token)
    const json = await response.json()
    console.log(json)
    // const { count, distance } = json.all_run_totals
    // const movingTime = json.all_run_totals.moving_time
    // console.log(json)
    res.locals.data = json;
    return next();
    // return res.status(200).json({
    //     count,
    //     distance,
    //     movingTime
    // })
}

module.exports = stravaController;