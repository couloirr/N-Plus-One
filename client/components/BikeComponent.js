import React, {Component} from "react";
import { useDispatch } from "react-redux";
import { newRepair } from "../actions/userActions";
// import { useState } from "react";

const BikeComponent = (props)=> {
  const {componentName, currentHours, serviceInterval, _id} = props.part;
  const dispatch = useDispatch();


  const onSubmit = e => {
    e.preventDefault();
    const partId = e.target.edit.id
    const newRepairThunk = newRepair(partId);
    dispatch(newRepairThunk)
  }
const percentage = (currentHours, serviceInterval) => {
  let percent = ((serviceInterval - currentHours)/serviceInterval * 100);
  percent = Math.round(percent/10) * 10
  if(percent < 0) return 0;
  return percent
}
        return(
            <div className="component">
                <h4>{`${componentName}`}</h4>
                <h4>{`Percent: ${percentage(currentHours, serviceInterval)}%`}</h4>
                
                <h4>{`Hours Until Service: ${serviceInterval - currentHours > 0 ? serviceInterval - currentHours :0 }`}</h4>
                <form onSubmit={onSubmit}> 
                        
                <button id={_id} name="edit" type='submit'>Complete Repair</button>
                </form>
            </div>
        )
    }



export default BikeComponent;