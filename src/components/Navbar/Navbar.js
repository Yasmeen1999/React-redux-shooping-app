import React from "react";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">
        <h2 className={style.nav__text}>My shopping cart</h2>
      </Link>
      <Link to="/cart">
        <div className={style.cart__container}>
          <h3 className={style.cart__title}>Cart</h3>
          <img
            className={style.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
          />
          <div className={style.counter}>0</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
