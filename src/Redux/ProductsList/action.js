import axios from "axios";

import { ActionTypes } from "./type";

export const fetchUserRequest = () => {
  return {
    type: ActionTypes.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: ActionTypes.FETCH_USER_FAILURE,
    payload: error,
  };
};
// this is used for project
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // response.date is the array of users
        const users = response.data.map((user) => user.name);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchUserFailure(error.message));
      });
  };
};
