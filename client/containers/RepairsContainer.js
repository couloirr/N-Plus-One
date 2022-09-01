import React, { Component } from 'react';
import BikeComponentContainer from './BikeComponentContainer';
import { useSelector } from 'react-redux';
// import path 
import img from '../assets/bikepic.png'




const RepairContainer = ({
    bikeName,
    components
}) => {

    return(
              <div>
                <div className='title'><h2 id='bike-name'>{bikeName}</h2>
                    
                
                </div>

                
                <div className='container' id='repair-container'>
                <img src={img} height={`500px`}></img>
                <BikeComponentContainer 
                components={components}
                />
                </div>
            </div>  
    )
    }




export default RepairContainer;