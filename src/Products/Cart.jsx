import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaceOrder } from "../Redux/Order/Order.action";
import { decrement, increament } from "../Redux/Cart/Cart.action";

export const Cart = () => {
  const { cartData } = useSelector((store) => store.cart);
  // console.log(cartData);
  
  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(PlaceOrder(data));
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
    <h1>Total Price = {total}</h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        marginTop: "20px",
      }}
    >
      {cartData.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt="img" />
          <h3>{el.brand}</h3>
          <p>{el.title}</p>
          <h5>{el.category}</h5>
          <h5>{el.price}</h5>
          <button
            disabled={el.count == 1}
            onClick={() => handleDecrement(el.id)}
          >
            -
          </button>
          <span>{el.count}</span>
          <button onClick={() => handleIncrement(el.id)}>+</button>
          <button onClick={() => handleClick(el)}>Place Order</button>
        </div>
      ))}
    </div>
    </>
  );
};
