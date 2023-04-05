import React from 'react'

import { useSelector } from 'react-redux';

export const Order = () => {
    const { orderData } = useSelector((store) => store.order);
    // console.log(orderData);
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      marginTop: "20px",
    }}
  >
    {orderData.map((el) => (
      <div key={el.id}>
        <img src={el.image} alt="img" />
        <h3>{el.brand}</h3>
        <p>{el.title}</p>
        <h5>{el.category}</h5>
        <h5>{el.price}</h5>
      </div>
    ))}
  </div>
  )
}


