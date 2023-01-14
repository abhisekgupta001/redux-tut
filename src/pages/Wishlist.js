import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";

const Wishlist = () => {
  const products = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleWishlistRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div>
      <h3>Wishlist</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              onClick={() => handleWishlistRemove(product.id)}
              className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
