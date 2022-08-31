// import { useReducer } from 'react';
import * as types from '../constants/actionTypes';

const initialState = {
    bikeName: 'none',
    totalMiles: 0,
    totalElevation: 0,
    recentHours: 0,
    totalHours: 0,
    bikeComponents: [],
};


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_USER:{
            return  action.payload
        }
        case types.NEW_RIDE:{
            return  action.payload
        }
        default: {
            return state;
        }
    }
}

export default userReducer;