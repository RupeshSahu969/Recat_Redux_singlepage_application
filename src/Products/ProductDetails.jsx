import React, { useEffect } from "react";
import { getDetails } from "../Redux/ProductDetails/Details.action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Redux/Cart/Cart.action";

export const ProductDetails = () => {
  
  const dispatch = useDispatch();
  const { productDetails } = useSelector((store) => store.productDetails);
  const { id } = useParams();
  //     console.log(id);
  //   console.log(productDetails);
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);
  const handleClick = () => {
    dispatch(AddToCart({ ...productDetails,count:1 }));
  };
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <div key={productDetails.id}>
        <img src={productDetails.image} alt="img" />
        <h3>{productDetails.brand}</h3>
        <p>{productDetails.title}</p>
        <h5>{productDetails.category}</h5>
        <h5>{productDetails.price}</h5>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};
