import { GET_USER, USERS_ERROR, NEW_RIDE } from "../constants/actionTypes";
import axios from 'axios';



export async function getUser(dispatch) {
    const response = await axios.get('http://localhost:3000/api/signin')
    // console.log(response.data.bikes[0].bikeComponents)
    dispatch({type: 'GET_USER', payload: response.data.bikes[0]})
}

export function saveNewRide(miles,hours,elevation,currentBike){
    const reqObj = {
        miles: miles,
        hours: hours,
        elevation: elevation
    }
    const jsonReq = JSON.stringify(reqObj)
    return async function saveNewRideThunk(dispatch, getState){
    const response = await axios.post('http://localhost:3000/api/newride',jsonReq)
    console.log('response', response)
    dispatch({type: 'NEW_RIDE', payload: response.data.bikes[0]})
    }
}

// export const handleSubmit = event => () => {
//     event.preventDefault();
//     console.log('in handle submit')
// }