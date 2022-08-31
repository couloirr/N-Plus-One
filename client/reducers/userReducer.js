import { useReducer } from 'react';
import * as types from '../constants/actionTypes';

const initialState = {};


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
            }
        default: {
            return state;
        }
    }
}

export default userReducer;