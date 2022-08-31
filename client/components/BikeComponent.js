import React, {Component} from "react";
import { useDispatch } from "react-redux";

const BikeComponent = (props)=> {
  const {componentName, currentHours, serviceInterval, _id} = props.part;
  const dispatch = useDispatch;
  const handleRepair = e => {
//    dispatch(saveNewRepair)
  }
//  console.log(_id)
        return(
            <div className="component">
                <h4>{`name: ${componentName}`}</h4>
                <h4>{`percent: ${((serviceInterval - currentHours)/serviceInterval * 100)}%`}</h4>
                
                <h4>{`hours remaining ${serviceInterval - currentHours}`}</h4>
                <form>
                        
                <button type='submit'></button>
                </form>
            </div>
        )
    }



export default BikeComponent;