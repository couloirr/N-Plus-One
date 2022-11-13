import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../actions/userActions';
import { Form, useNavigate } from 'react-router-dom';
import Ride from '../components/ride';
import AddRide from '../components/AddRide';
import FormDialog from '../components/EditBikeModal';
import { useDispatch } from 'react-redux';
import { userUpdate, getDbUser } from '../actions/userActions';
import PartView from './PartView';
import Bike from '../components/BikeCard';
import { List } from '@mui/material';
const AllBikesView = (props) => {
  const {
    recentRides,
    totalElevation,
    totalHours,
    totalMiles,
    name,
    bikes,
    _id,
  } = useSelector((state) => state.user);
  const bikeArr = [];
  bikes.forEach((bike, i) => {
    bikeArr.push(
      <Bike
        position={bike}
        bikeName={bike.bikeName}
        picLink={bike.picLink}
        bikeId={bike._id}
        key={i}
        userId={_id}
        components={bike.bikeComponents}
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
        userId={_id}
      />
    );
  });
  return (
    <div id="bikeView">
      <div id="totalsDisplay">
        <h1>{totalElevation}</h1>
        <h1>{totalHours}</h1>
        <h1>{totalMiles}</h1>
        <h1>{name}</h1>
      </div>

      <div id="bikesDisplay">{bikeArr}</div>
      <FormDialog type={'add'} userId={_id} />
      <div id="ridesDisplay">
        <h1>Recent Rides</h1>
        <List> {rideArr}</List>
      </div>
      {/* <AddRide userId={_id} /> */}
    </div>
  );
};

export default AllBikesView;
