import React, { Component } from 'react';
import BikeComponentContainer from './BikeComponentContainer';
import { useSelector } from 'react-redux';
// import path 
// import img from '../assets'


// class RepairContainer extends Component{
//     render() {
//         // console.log('repair container', this.props.user.user.bikes)
//         const currentBike = this.props.user.user.bikes;
//         console.log('current bike', currentBike)
//         return(
           
//             <div>
//                 <div className='title'><h2 id='bike-name'></h2>
                    
                
//                 </div>
//                 <form>
//                         <input />
//                         <button type='submit'>Add Bike</button>
//                 </form>
                
//                 <div className='container' id='repair-container'>
//                 <h4 className='container'>Pic Placeholder</h4>
//                 <BikeComponentContainer />
//                 </div>
//             </div>
//         )
//     }

// }

const RepairContainer = ({
    bikeName,
    components
}) => {

    return(
              <div>
                <div className='title'><h2 id='bike-name'>{bikeName}</h2>
                    
                
                </div>
                <form>
                        <input />
                        <button type='submit'></button>
                </form>
                
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