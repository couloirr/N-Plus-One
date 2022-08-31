import React, { Component } from 'react';
import BikeStats from '../components/bikeStats';
import RideStats from '../components/RideStats';

class StatsContainer extends Component{
    render() {
        return(
            <div className='container' id='stats-container'>
               
                <BikeStats />
                <RideStats />
            </div>
        )
    }

}

export default StatsContainer;