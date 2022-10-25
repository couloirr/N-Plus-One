import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../actions/userActions';
import { Form, useNavigate } from 'react-router-dom';
import Ride from '../components/ride';
import AddRide from '../components/AddRide';
import FormDialog from '../components/EditBikeModal';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../actions/userActions';
import PartView from './PartView';
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
      <FormDialog type={'add'} userId={_id} />
      <div id="bikesDisplay">{bikeArr}</div>
      <div id="ridesDisplay">
        <h1>Recent Rides</h1>
        {rideArr}
      </div>
      <AddRide />
    </div>
  );
};

const Bike = ({ position, bikeName, picLink, bikeId, userId, components }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [partView, setPartView] = React.useState(false);
  function handleClick(e) {
    e.preventDefault();
    setPartView(!partView);
    // navigate('/bikeView', { state: { bikeObj: position, userId: userId } });
  }
  function handleDelete(e) {
    e.preventDefault();
    const updateObj = {
      bikeId: bikeId,
      update: null,
      userId: userId,
      type: 'deleteBike',
    };
    const getUserThunk = userUpdate(updateObj);
    dispatch(getUserThunk);
  }
  return (
    <div className="mainContainer">
      <div className="bikeCard" id={bikeId}>
        <h1>{bikeName}</h1>
        {partView ? (
          <PartView components={components} bikeId={bikeId} userId={userId} />
        ) : (
          <img src={picLink}></img>
        )}
        <button onClick={handleClick}>See Parts</button>
        <button onClick={handleDelete}>Delete Bike</button>
        <FormDialog bikeName={bikeName} bikeId={bikeId} userId={userId} />
      </div>
      <div className="partContainer"></div>
    </div>
  );
};
export default AllBikesView;
