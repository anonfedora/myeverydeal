import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import MetaData from "../layout/MetaData";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="product-card" to={`/product/${product.id}`}>
      {/* <img src={product.images[0]?.url} alt="" /> */}
      <MetaData title={`${product.name}`} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />
        <span className="product-card-span">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`${product.price}`}</span>
      <span>{`${product.weight}`}</span>
      <span>{`${product.created_at}`}</span>
    </Link>
  );
};

export default ProductCard;
