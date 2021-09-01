import React from "react";
import styles from "./ProductsComponents.module.css";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

const ProductsComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className={styles.containerWrap} key={id}>
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
              Category :<span>{category}</span>
            </div>
          </div>
          <div className={styles.product__buttons}>
            <Link to={`/product/${id}`}>
              <button
                className={`${styles.buttons__btn} ${styles.buttons__view}`}
              >
                View Item
              </button>
            </Link>

            <button className={`${styles.buttons__btn} ${styles.buttons__add}`}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductsComponents;
