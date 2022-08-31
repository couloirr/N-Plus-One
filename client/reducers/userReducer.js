// import { useReducer } from 'react';
import * as types from '../constants/actionTypes';

const initialState = {
    bikeName: 'none',
    totalMiles: 0,
    totalElevation: 0,
    recentHours: 0,
    totalHours: 0,
    bikeComponent: [],
};


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_USER:{
            return {
                ...state,
                ...action.payload
            }
                
        } 
        default: {
            return state;
        }
    }
}

export default userReducer;