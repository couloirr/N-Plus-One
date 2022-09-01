import React from "react";



const Ride =({rideName, rideDistance, rideTime, rideElevation})=>{
    // console.log(props)
    // const {rideName, rideDistance, rideTime, rideElevation} = props.props
    const metersConvert = (num) => Math.round((num / 1609) * 10) / 10;
    const timeConvert = (num) => Math.round(num * 10) / 10;
    const elevationConvert = (num) => Math.round(num * 10) / 10;
return (
    <div className="component">
          
                <h4>{`Name: ${rideName}`}</h4>
                <h4>{`Distance: ${metersConvert(rideDistance)} miles`}</h4>
                <h4>{`Moving time: ${timeConvert(rideTime)} hours`}</h4>
                <h4>{`Elevation: ${elevationConvert(rideElevation)} ft`}</h4>

    </div>
)

}

export default Ride