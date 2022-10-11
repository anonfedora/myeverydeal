import React, { useEffect } from "react";
import { CgMouse } from "react-icons/all";
import { useAlert } from "react-alert";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./Home.css";
import { fetchProducts } from "../../services/slices/productSlice";
import Loader from "../layout/Loader/Loader";
import ProductCard from "./ProductCard.jsx"

const Home = () => {
  const home = "SHOP";
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(fetchProducts());
  }, [error, dispatch, alert]);

  // let data = Object.entries(products)
  console.log(products)
  return (
    <>
      <MetaData title={home} />
      <div className="banner">
        <p>Welcome To MYEVERYDEAL</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>
      {/* {console.log(data)} */}
      <h2 className="home-heading">Products</h2>
      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Home;
