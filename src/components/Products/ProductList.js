import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../../Redux/ProductsList/action";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../Redux";

import styles from "./Product.module.css";

import ProductsComponents from "./ProductsComponents";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products:", products);
  return (
    <div className={styles.products}>
      <ProductsComponents />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
