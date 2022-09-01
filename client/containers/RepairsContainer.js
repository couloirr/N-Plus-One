import React, { Component } from 'react';
import BikeComponentContainer from './BikeComponentContainer';
import { useSelector } from 'react-redux';
// import path 
// import img from '../assets'




const RepairContainer = ({
    bikeName,
    components
}) => {

    return(
              <div>
                <div className='title'><h2 id='bike-name'>{bikeName}</h2>
                    
                
                </div>

                
                <div className='container' id='repair-container'>
                <h4 className='container'>Pic Placeholder</h4>
                <BikeComponentContainer 
                components={components}
                />
                </div>
            </div>  
    )
    }




export default RepairContainer;