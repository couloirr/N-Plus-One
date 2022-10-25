import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import Ride from '../components/ride';
import AddRide from '../components/AddRide';
const AllBikesView = (props) => {
  const { recentRides, totalElevation, totalHours, totalMiles, name, bikes } =
    useSelector((state) => state.user);
  const bikeArr = [];
  bikes.forEach((bike, i) => {
    bikeArr.push(
      <Bike
        position={bike}
        bikeName={bike.bikeName}
        picLink={bike.picLink}
        dbId={bike._id}
        key={i}
      />
    );
  });
  const rideArr = [];
  recentRides.forEach((ride, i) => {
    rideArr.push(
      <Ride
        rideName={ride.name}
        rideDistance={ride.distance}
        rideTime={ride.moving_time}
        rideElevation={ride.total_elevation_gain}
        bikes={bikes}
      />
    );
  });
  return (
    <div id="allBikes">
      <div id="totalsDisplay">
        <h1>{totalElevation}</h1>
        <h1>{totalHours}</h1>
        <h1>{totalMiles}</h1>
        <h1>{name}</h1>
      </div>
      <div id="bikesDisplay">{bikeArr}</div>
      <div id="ridesDisplay">
        <h1>Recent Rides</h1>
        {rideArr}
      </div>
      <AddRide />
    </div>
  );
};

const Bike = ({ position, bikeName, picLink, dbId }) => {
  const navigate = useNavigate();
  function handleClick(e, position) {
    e.preventDefault();
    navigate('/bikeView', { state: { bikeObj: position } });
  }
  return (
    <div className="bikeCard" id={dbId}>
      <h1>{bikeName}</h1>
      <img src={picLink}></img>
      <button onClick={(e) => handleClick(e, position)}>Go To Details</button>
    </div>
  );
};
export default AllBikesView;
