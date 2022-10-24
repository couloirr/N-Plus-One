import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser } from '../actions/userActions.js';
import RepairContainer from './RepairsContainer.js';
import StatsContainer from './StatsContainer.js';

const MainContainer = (props) => {
  const { recentRides, totalElevation, totalHours, totalMiles, name, bikes } =
    useSelector((state) => state.user);
  return (
    <div id="mainContainer">
      <h1>{totalElevation}</h1>
      <h1>{totalHours}</h1>
      <h1>{totalMiles}</h1>
      <h1>{name}</h1>
      {/* <RepairContainer bikeName={bikeName} components={bikeComponents} /> */}
      {/* <StatsContainer
        totalMiles={totalMiles}
        totalElevation={totalElevation}
        totalHours={totalHours}
        recentRides={recentRides}
      /> */}
    </div>
  );
};
export default MainContainer;
