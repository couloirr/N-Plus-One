import {
  GET_USER,
  USERS_ERROR,
  NEW_RIDE,
  NEW_REPAIR,
  GET_STRAVA,
} from '../constants/actionTypes.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// const [searchParams] = useSearchParams();

export function getStravaUser(stravaID, authToken) {
  const id = stravaID;
  const token = authToken;
  return async function getUser(dispatch) {
    // const id = searchParams.get('id');
    // const token = searchParams.get('token');
    console.log(id, token);
    const response = await axios.get('http://localhost:3000/user', {
      params: {
        id: id,
        token: token,
      },
    });
    // console.log(response.data.bikes[0].bikeComponents)
    console.log(response);
    dispatch({ type: 'GET_USER', payload: response.data });
  };
}
// export async function getUser(dispatch) {
//   const id = searchParams.get('id');
//   const token = searchParams.get('token');
//   const response = await axios.get('http://localhost:3000/user', {
//     params: {
//       id: id,
//       token: token,
//     },
//   });
//   // console.log(response.data.bikes[0].bikeComponents)
//   console.log(response);
//   dispatch({ type: 'GET_USER', payload: response.data });
// }
export async function getStrava(dispatch) {
  console.log('in getStrava');
  const response = await axios.get('http://localhost:3000/api/strava');
  console.log(response.data.bikes[0]);
  dispatch({ type: 'GET_STRAVA', payload: response.data.bikes[0] });
}

export function saveNewRide(miles, hours, elevation, currentBike) {
  const recentRidesArr = useSelector(state);
  const reqObj = {
    miles: miles,
    hours: hours,
    elevation: elevation,
  };
  const jsonReq = JSON.stringify(reqObj);
  return async function saveNewRideThunk(dispatch, getState) {
    const response = await axios.post(
      'http://localhost:3000/api/newride',
      jsonReq
    );
    console.log('response', response);
    dispatch({ type: 'NEW_RIDE', payload: response.data.bikes[0] });
  };
}

export function newRepair(id) {
  const partId = { id: id };
  const jsonPart = JSON.stringify(partId);

  return async function saveNewRepairThunk(dispatch, getState) {
    const response = await axios.post(
      'http://localhost:3000/api/newrepair',
      id
    );
    dispatch({ type: 'NEW_REPAIR', payload: response.data.bikes[0] });
  };
}
