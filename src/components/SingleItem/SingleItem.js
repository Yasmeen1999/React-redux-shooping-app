import React, { useEffect } from "react";
import axios from "axios";
import { selectedProduct } from "../../Redux/ProductsList/action";
import styles from "./SingleItem.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SingleItem = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);
  console.log("Product:", product);
  return (
    <div className={styles.containerWrap}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className={styles.cards}>
          <div className={styles.container}>
            <img src={image} alt={image} />
            <div>
              Title : <span>{title}</span>
            </div>
            <div>
              Price :<span>{price}</span>
            </div>
            <div>
              Description :<span>{description}</span>
            </div>
            <div>
              Category :<span>{category}</span>
            </div>
          </div>
          <div className={styles.btn}>
            <button className={styles.details__addBtn}>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleItem;
