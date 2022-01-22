import axios from "axios";
import { LOAD_USER, LOGIN_USER, REGISTER_USER, USER_FAIL, GET_USERS, LOGOUT_USER } from './actionsTypes';


export const addcontact = (newcontact, history) => async(dispatch) => { //history from react-router-dom 
    dispatch({
        type: LOAD_USER
    })
    try {
        let res = await axios.post('/api/users/addcontact', newcontact)
        dispatch({
            type: REGISTER_USER,
            payload: res.data // payload = msg, user, token
        })
    
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
  }

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/remove/${userId}`); //userId === req.params
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    let res = await axios.get("/api/users/");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const crmaffectation = () => async (dispatch) => {
    try {
      let res = await axios.get("/api/users/");
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };






export const updateUser = (id, userUpdate, history) => async (dispatch) => {
  try {
    await axios.put(`/api/users/edit/${id}`, userUpdate); //id === req.params AND userUpdate === req.body
    dispatch(getUsers());
    history.push('/profile')
  } catch (error) {
    console.log(error);
  }

};