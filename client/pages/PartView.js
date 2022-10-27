import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import BikeComponent from '../components/BikeComponent';
import AddEditPart from '../components/AddEditPart';
const PartView = ({ bikeId, components, userId }) => {
  const compArr = [];
  components.forEach((component) => {
    compArr.push(
      <BikeComponent
        componentName={component.componentName}
        currentHours={component.currentHours}
        serviceInterval={component.serviceInterval}
        partId={component._id}
        bikeId={bikeId}
        userId={userId}
      />
    );
  });
  return (
    <div id="bikesDisplay">
      <div className="componentDisplay">{compArr}</div>
      <AddEditPart
        type={'add'}
        currentHours={0}
        componentName={''}
        serviceInterval={200}
        userId={userId}
        bikeId={bikeId}
      />
    </div>
  );
};
export default PartView;
