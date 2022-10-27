import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewRide } from '../actions/userActions.js';
import { userUpdate } from '../actions/userActions.js';
const AddRide = ({ userId }) => {
  const dispatch = useDispatch();
  const metersConvert = (num) => Math.round(num * 1609 * 10) / 10;
  const timeConvert = (num) => Math.round(num * 3600 * 10) / 10;
  const elevationConvert = (num) => Math.round(num / 3.281);
  const onSubmit = (e) => {
    e.preventDefault();
    const miles = metersConvert(e.target.total_miles.value);
    const hours = timeConvert(e.target.total_hours.value);
    const elevation = elevationConvert(e.target.total_elevation.value);
    const name = e.target.name.value;
    const updateObj = {
      userId: userId,
      type: 'addRide',
      update: {
        distance: miles,
        moving_time: hours,
        total_elevation_gain: elevation,
        name: name,
      },
    };
    const getUserThunk = userUpdate(updateObj);
    dispatch(getUserThunk);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Add New Ride</h3>
        <input type="text" name="name" id="rideName" placeholder="Ride Name" />
        <input
          type="number"
          name="total_miles"
          id="miles"
          placeholder="Total Miles"
        />

        <input
          type="number"
          name="total_hours"
          id="hours"
          placeholder="Total Hours"
        />
        <input
          type="number"
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
