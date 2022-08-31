import React, {Component} from "react";

const BikeStats =(props)=> {
    const {totalMiles, totalElevation, totalHours} = props.props
        console.log(totalMiles)
        return(
            <div className="stats">
                <h2></h2>
                <span><h4>{`Total Miles:${totalMiles}`}</h4></span>
                <span><h4>{`Total Elevation:${totalElevation}ft`}</h4></span>
                <span><h4>{`Total Hours:${totalHours}`}</h4></span>
            </div>
        )
    

}

export default BikeStats;