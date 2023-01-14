import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const cartItems = useSelector((state) => state.cart); //subscribe under the hood to which state, here state means entire state and cart is one state inside

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <span className="logo">
        <Link className="navLink" to="/">
          Redux Store
        </Link>
      </span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/wishlist">
          Wishlist [{wishlistItems.length}]
        </Link>
        <Link className="navLink" to="/cart">
          Cart [{cartItems.length}]
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
