import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser } from '../actions/userActions.js';
import RepairContainer from './RepairsContainer.js';
import StatsContainer from './StatsContainer.js';

const MainContainer = (props) => {
  const {
    bikeName,
    bikeComponents,
    totalMiles,
    totalElevation,
    recentRides,
    totalHours,
  } = useSelector((state) => state.user);
  // console.log(bikeName)
  return (
    <div id="mainContainer">
      <RepairContainer bikeName={bikeName} components={bikeComponents} />
      <StatsContainer
        totalMiles={totalMiles}
        totalElevation={totalElevation}
        totalHours={totalHours}
        recentRides={recentRides}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({ user: state.user });

// export default connect(mapStateToProps, {getUser})(MainContainer)
export default connect(mapStateToProps, null)(MainContainer);
