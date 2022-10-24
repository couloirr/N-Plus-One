import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewRide } from '../actions/userActions.js';
import { useRef } from 'react';
// import { handleSubmit } from "../actions/userActions";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Ride from './ride.js';

const RideStats = ({ rides }) => {
  // const recentRidesArr = useSelector((state) => state.user.recentRides)
  const rideComps = [];

  console.log(rides);
  if (rides) {
    rides.forEach((element) => {
      rideComps.push(
        <Ride
          rideName={element.name}
          rideDistance={element.distance}
          rideTime={element.moving_time}
          rideElevation={element.total_elevation_gain}
        />
      );
    });
  }

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    console.log('refresh prevented');
    const miles = e.target.total_miles.value;
    const hours = e.target.total_hours.value;
    const elevation = e.target.total_elevation.value;

    const saveNewRideThunk = saveNewRide(miles, hours, elevation);
    dispatch(saveNewRideThunk);
  };

  return (
    <div>
      <h3>Recent Rides</h3>
      <div>{rideComps}</div>
      <form onSubmit={onSubmit}>
        <h3>Add New Ride</h3>
        <input
          type="text"
          name="total_miles"
          id="miles"
          placeholder="Total Miles"
        />

        <input
          type="text"
          name="total_hours"
          id="hours"
          placeholder="Total Hours"
        />
        <input
          type="text"
          name="total_elevation"
          id="elevation"
          placeholder="Total Elevation"
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default RideStats;
