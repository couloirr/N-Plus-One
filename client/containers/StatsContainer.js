import React, { Component } from 'react';
import BikeStats from '../components/bikeStats';
import RideStats from '../components/RideStats';

const StatsContainer =(props)=>{
        return(
            <div className='container' id='stats-container'>
               
                <BikeStats 
                props={props}
                />
                <RideStats
                rides={props.recentRides}
                 />
            </div>
        )
    }



export default StatsContainer;