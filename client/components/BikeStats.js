import React, {Component} from "react";
import { useDispatch } from "react-redux";
import { getStrava } from "../actions/userActions";

const BikeStats =(props)=> {
    const {totalMiles, totalElevation, totalHours} = props.props
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        console.log("refresh prevented");

       dispatch(getStrava);
        
      };
        return(
            <div className="stats">
                <h2></h2>
                <span><h4>{`Total Miles:${totalMiles}`}</h4></span>
                <span><h4>{`Total Elevation:${totalElevation}ft`}</h4></span>
                <span><h4>{`Total Hours:${totalHours}`}</h4></span>
                <form onSubmit={handleSubmit}>
                    <button id="strava">Sync Strava</button>
                </form>
            </div>
        )
    

}

export default BikeStats;