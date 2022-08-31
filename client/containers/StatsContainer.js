import React, { Component } from 'react';
import BikeStats from '../components/bikeStats';
import RideStats from '../components/RideStats';

const StatsContainer =(props)=>{
    console.log(props)
        return(
            <div className='container' id='stats-container'>
               
                <BikeStats 
                props={props}
                />
                <RideStats />
            </div>
        )
    }



export default StatsContainer;