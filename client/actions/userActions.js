import { GET_USER, USERS_ERROR } from "../constants/actionTypes";
import axios from 'axios';

// export const getUser = () => async dispatch => {


//     try{
//         const res = await axios.get('http://localhost:3000/api/signin')
//         dispatch({
//             type: GET_USER,
//             payload: res.data
//         })
//     }
//     catch(e){
//         dispatch({
//             type: USERS_ERROR,
//             payload: console.log(e),
//         })
//     }
// }

export async function getUser(dispatch) {
    const response = await axios.get('http://localhost:3000/api/signin')
    // console.log(response.data.bikes[0])
    dispatch({type: 'GET_USER', payload: response.data.bikes[0]})
}