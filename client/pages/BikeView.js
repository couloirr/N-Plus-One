import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import BikeComponent from '../components/BikeComponent';
const BikeView = (props) => {
  const location = useLocation();
  const { bikeComponents, bikeName, picLink, _id } = location.state.bikeObj;
  const compArr = [];
  bikeComponents.forEach((component) => {
    compArr.push(
      <BikeComponent
        componentName={component.componentName}
        currentHours={component.currentHours}
        serviceInterval={component.serviceInterval}
        _id={component._id}
      />
    );
  });
  return (
    <div id="bikesDisplay">
      <h1>{bikeName}</h1>
      <img src={picLink}></img>
      <div className="componentDisplay">{compArr}</div>
    </div>
  );
};
export default BikeView;
