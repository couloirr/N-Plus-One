import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../actions/userActions.js';
import AddEditPart from './AddEditPart.js';

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
    <div className="component">
      <h4>{`${componentName}`}</h4>
      <h4>{`Percent: ${percentage(currentHours, serviceInterval)}%`}</h4>

      <h4>{`Hours Until Service: ${
        serviceInterval - currentHours > 0 ? serviceInterval - currentHours : 0
      }`}</h4>
      <form onSubmit={onSubmit}>
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
      </form>
    </div>
  );
};

export default BikeComponent;
