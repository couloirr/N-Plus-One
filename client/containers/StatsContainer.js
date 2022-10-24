import React, { Component } from 'react';
import BikeStats from '../components/bikeStats.js';
import RideStats from '../components/RideStats.js';

const StatsContainer = (props) => {
  return (
    <div className="container" id="stats-container">
      <BikeStats props={props} />
      <RideStats rides={props.recentRides} />
    </div>
  );
};

export default StatsContainer;
