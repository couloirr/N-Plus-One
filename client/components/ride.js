import React from 'react';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../actions/userActions';
const Ride = ({
  rideName,
  rideDistance,
  rideTime,
  rideElevation,
  bikes,
  userId,
}) => {
  const dispatch = useDispatch();
  const metersConvert = (num) => Math.round((num / 1609) * 10) / 10;
  const timeConvert = (num) => Math.round((num / 3600) * 10) / 10;
  const elevationConvert = (num) => Math.round(num * 3.281);
  const selectorArr = [];
  bikes.forEach((element) => {
    selectorArr.push(<option id={element._id}>{element.bikeName}</option>);
  });

  function handleChange(e) {
    e.preventDefault();
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute('id');
    const updateObj = {
      bikeId: option,
      userId: userId,
      type: 'assignRide',
      update: {
        rideDistance: rideDistance,
        rideTime: rideTime,
        rideElevation: rideElevation,
      },
    };
    const getUserThunk = userUpdate(updateObj);
    dispatch(getUserThunk);
  }
  return (
    <div className="component">
      <h4>{`Name: ${rideName}`}</h4>
      <h4>{`Distance: ${metersConvert(rideDistance)} miles`}</h4>
      <h4>{`Moving time: ${timeConvert(rideTime)} hours`}</h4>
      <h4>{`Elevation: ${elevationConvert(rideElevation)} ft`}</h4>
      <select onChange={handleChange}>
        <option selected disabled>
          Assign A Ride
        </option>
        {selectorArr}
      </select>
    </div>
  );
};

export default Ride;
