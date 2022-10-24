import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewRide } from '../actions/userActions.js';

const AddRide = () => {
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

export default AddRide;
