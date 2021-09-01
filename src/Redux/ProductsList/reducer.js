// import {
//   FETCH_USER_REQUEST,
//   FETCH_USER_SUCCESS,
//   FETCH_USER_FAILURE,
// } from "./type";
import { ActionTypes } from "./type";

const initialState = {
  products: [],
  // loading: false,
  // users: [],
  // error: "",
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
// const shoopingReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         users: action.payload,
//         error: "",
//       };
//     case FETCH_USER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         users: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
