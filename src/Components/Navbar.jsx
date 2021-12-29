import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SvgIcon from "@mui/material/SvgIcon";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Navbar = () => {
  var [cartItems, setCartItems] = useContext(CartContext);

  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.navbar}>
          <Link to="/">
            <img src="/images/logo.png" alt="" className={styles.logo} />
          </Link>
          <Link to="/" className={styles.link}>
            <HomeIcon style={{ fontSize: "40px" }} />
          </Link>
          <Link to="/products" className={styles.link}>
            Products
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <Link to="/admin" className={styles.link}>
            Admin
          </Link>
        </div>
        <div className={styles.navbarTwo}>
          <Link to="account" className={styles.link}>
            Account
          </Link>
          <Link to="search" className={styles.link}>
            Search
          </Link>
          <Link to="cart" className={styles.link}>
            <div>
              <div>{cartItems.length}</div>
              <div>
                <ShoppingCartIcon style={{ fontSize: "40px" }} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
