import React, { Component } from 'react';
import BikeComponentContainer from './BikeComponentContainer';
// import path 
// import img from '../assets'


class RepairContainer extends Component{
    render() {
        return(
           
            <div>
                <div className='title'><h2 id='bike-name'>Santa Cruz Bronson</h2>
                    
                
                </div>
                <form>
                        <input />
                        <button type='submit'>Add Bike</button>
                </form>
                
                <div className='container' id='repair-container'>
                <h4 className='container'>Pic Placeholder</h4>
                <BikeComponentContainer />
                </div>
            </div>
        )
    }

}

export default RepairContainer;