import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { fetchProducts } from "../store/productsSlice";
import { STATUSES } from "../store/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product); //renaming data to products
  const productsInWishlist = useSelector((state) => state.wishlist);
  const productsInCart = useSelector((state) => state.cart);

  //   const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  // const handleAdd = (product) => {
  //   //product to redux store
  //   dispatch(add(product));
  // };

  // const handleAddtoWishlist = (product) => {
  //   dispatch(addToWishlist(product));
  // };

  const isProductInCart = (product) => {
    return productsInCart.includes(product);
  };

  const isProductInWishlist = (product) => {
    return productsInWishlist.includes(product);
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!!!</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="product card image" />
          <h4>{product.title}</h4>
          <h5>$ {product.price}</h5>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <button
              onClick={() =>
                isProductInCart(product)
                  ? dispatch(remove(product.id))
                  : dispatch(add(product))
              }
              className="btn">
              {isProductInCart(product) ? "Remove from Cart" : "Add To Cart"}
            </button>
            <button
              onClick={() =>
                isProductInWishlist(product)
                  ? dispatch(removeFromWishlist(product.id))
                  : dispatch(addToWishlist(product))
              }
              className="btn">
              {isProductInWishlist(product)
                ? "Remove from Wishlist"
                : "Add To Wishlist"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
