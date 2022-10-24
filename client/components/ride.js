import React from 'react';

const Ride = ({ rideName, rideDistance, rideTime, rideElevation, bikes }) => {
  const metersConvert = (num) => Math.round((num / 1609) * 10) / 10;
  const timeConvert = (num) => Math.round(num * 10) / 10;
  const elevationConvert = (num) => Math.round(num * 10) / 10;
  const selectorArr = [];
  bikes.forEach((element) => {
    selectorArr.push(<option id={element.bikeId}>{element.bikeName}</option>);
  });

  function handleChange(e) {
    e.preventDefault();
    const bikeId = e.target.value;
    console.log(e.target.value);
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
