import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../actions/userActions.js';
import AddEditPart from './AddEditPart.js';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import BuildIcon from '@mui/icons-material/Build';
const BikeComponent = ({
  componentName,
  currentHours,
  serviceInterval,
  partId,
  bikeId,
  userId,
}) => {
  const [partName, setPartName] = React.useState(componentName);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const updateObj = {
      bikeId: bikeId,
      userId: userId,
      type: 'addService',
      partId: partId,
    };
    const getUserThunk = userUpdate(updateObj);
    dispatch(getUserThunk);
  };
  const percentage = (currentHours, serviceInterval) => {
    let percent = ((serviceInterval - currentHours) / serviceInterval) * 100;
    percent = Math.round(percent / 10) * 10;
    if (percent < 0) return 0;
    return percent;
  };
  return (
    <div>
      <ListItem>
        <ListItemText primary={componentName} />
        <ListItemText
          primary={null}
          secondary={`Percent: ${percentage(currentHours, serviceInterval)}%`}
        />
        <ListItemText
          primary={null}
          secondary={`Hours Until Service: ${
            serviceInterval - currentHours > 0
              ? serviceInterval - currentHours
              : 0
          }`}
        />

        <IconButton marginLeft="auto" aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="service">
          <BuildIcon />
        </IconButton>
      </ListItem>

      {/* <form onSubmit={onSubmit}>
        <button name="edit" type="submit" className="repair_button">
          Add Service
        </button>
        <AddEditPart
          type={'edit'}
          currentHours={currentHours}
          componentName={partName}
          serviceInterval={serviceInterval}
          userId={userId}
          partId={partId}
          bikeId={bikeId}
        />
      </form> */}
      <Divider component="li" />
    </div>
    // <div className="component">
    //   <h4>{`${componentName}`}</h4>
    //   <h4>{`Percent: ${percentage(currentHours, serviceInterval)}%`}</h4>

    //   <h4>{`Hours Until Service: ${
    //     serviceInterval - currentHours > 0 ? serviceInterval - currentHours : 0
    //   }`}</h4>
    //   <form onSubmit={onSubmit}>
    //     <button name="edit" type="submit" className="repair_button">
    //       Add Service
    //     </button>
    //     <AddEditPart
    //       type={'edit'}
    //       currentHours={currentHours}
    //       componentName={partName}
    //       serviceInterval={serviceInterval}
    //       userId={userId}
    //       partId={partId}
    //       bikeId={bikeId}
    //     />
    //     <AddEditPart
    //       type={'add'}
    //       currentHours={0}
    //       componentName={''}
    //       serviceInterval={200}
    //       userId={userId}
    //       bikeId={bikeId}
    //     />
    //   </form>
    // </div>
  );
};

export default BikeComponent;
