import { combineReducers } from "redux";

import {
  productReducer,
  selectedProductsReducer,
} from "./ProductsList/reducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});
export default rootReducer;
