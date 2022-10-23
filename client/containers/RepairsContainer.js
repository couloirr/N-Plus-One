import React, { Component } from 'react';
import BikeComponentContainer from './BikeComponentContainer.js';
import { useSelector } from 'react-redux';
// import path
import img from '../assets/bikepic.png';

const RepairContainer = ({ bikeName, components }) => {
  return (
    <div className="title">
      <h2 id="title">{bikeName}</h2>
      <div className="container" id="repair-container">
        <img src={img}></img>
        <BikeComponentContainer components={components} />
      </div>
    </div>
  );
};

export default RepairContainer;
