import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaceOrder } from "../Redux/Order/Order.action";
import { decrement, increament } from "../Redux/Cart/Cart.action";
import { Heading,Box, Image, Button } from "@chakra-ui/react";

export const Cart = () => {
  const { cartData } = useSelector((store) => store.cart);
  // console.log(cartData);
  
  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(PlaceOrder(data));
    alert("Placed Order")
  };
  const handleIncrement = (data) => {
    dispatch(increament(data));
  };
  const handleDecrement = (data) => {
    dispatch(decrement(data));
  };
  let total = 0;
cartData.forEach((el)=>{
  total=total+(el.count*el.price);
})
  return (
    <>
    <Heading>Total Price = {total}</Heading>
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap:"20px",
        marginTop: "20px",
      }}
    >
      {cartData.map((el) => (
        <Box key={el.id}  boxShadow={"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}  p="5px">
          <Image src={el.image} alt="img" w="100%" />
          <h3>{el.brand}</h3>
          <p>{el.title}</p>
          <h5>{el.category}</h5>
          <h5>{el.price}</h5>
          <Button
            disabled={el.count == 1}
            onClick={() => handleDecrement(el.id)}
          >
            -
          </Button>
          <span>{el.count}</span>
          <Button onClick={() => handleIncrement(el.id)}>+</Button>
          <Button onClick={() => handleClick(el)}>Place Order</Button>
        </Box>
      ))}
    </Box>
    </>
  );
};
