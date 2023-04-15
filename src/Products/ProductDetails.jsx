import React, { useEffect } from "react";
import { getDetails } from "../Redux/ProductDetails/Details.action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Redux/Cart/Cart.action";
import { Box, Button, Image, Stack } from "@chakra-ui/react";

export const ProductDetails = () => {
  
  const dispatch = useDispatch();
  const { productDetails } = useSelector((store) => store.productDetails);
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);
  const handleClick = () => {
    dispatch(AddToCart({ ...productDetails,count:1 }));
    alert('Add to Cart')
  };
  return (

    <Stack>
    <Box
      style={{
        marginTop: "20px",
      }}
    >
      <Box key={productDetails.id}  w="20%" m="auto"  boxShadow={"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}>
        <Image src={productDetails.image} alt="img" w="100%" />
        <h3>{productDetails.brand}</h3>
        <p>{productDetails.title}</p>
        <h5>{productDetails.category}</h5>
        <h5>{productDetails.price}</h5>
        <Button onClick={handleClick}  color="black">Add to Cart</Button>
      </Box>
    </Box>
    </Stack>
  );
};
