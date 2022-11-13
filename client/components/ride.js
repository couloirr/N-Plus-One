import React from 'react';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../actions/userActions';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
const Ride = ({
  rideName,
  rideDistance,
  rideTime,
  rideElevation,
  bikes,
  userId,
}) => {
  const dispatch = useDispatch();
  const [bike, setBike] = React.useState('');
  const metersConvert = (num) => Math.round((num / 1609) * 10) / 10;
  const timeConvert = (num) => Math.round((num / 3600) * 10) / 10;
  const elevationConvert = (num) => Math.round(num * 3.281);
  const selectorArr = [];
  bikes.forEach((element) => {
    selectorArr.push(
      <MenuItem id={element._id} value={element._id}>
        {element.bikeName}
      </MenuItem>
    );
  });

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setBike(e.target.value);
    const option = e.target.value;
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
      <ListItem>
        <ListItemText primary={rideName} />
        <ListItemText
          primary={null}
          secondary={`Distance: ${metersConvert(rideDistance)} miles`}
        />
        <ListItemText
          primary={null}
          secondary={`Moving time: ${timeConvert(rideTime)} hours`}
        />
        <ListItemText
          primary={null}
          secondary={`Elevation: ${elevationConvert(rideElevation)} ft`}
        />

        <FormControl sx={{ m: 1, minWidth: 175 }}>
          <InputLabel>Assign A Ride</InputLabel>
          <Select value={bike} label="Age" onChange={handleChange}>
            {selectorArr}
          </Select>
        </FormControl>
      </ListItem>
      <Divider component="li" />
    </div>
  );
};

export default Ride;
