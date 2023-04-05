import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Products/Product.action";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Product = () => {

  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, totalPages } = useSelector((store) => store.products);
  const array = new Array(totalPages).fill(0);

  useEffect(() => {
    dispatch(getData());
  }, []);
  
  const handleCategory = (e) => {
    setCategory(e.target.value);
    dispatch(getData({ category: e.target.value, order: order, page: 1  }));
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
    dispatch(getData({ category: category, order: e.target.value, page: 1  }));
  };
  const handlePage = (page) => {
    setPage(page);
    dispatch(getData({ category: category, order: order, page: page }));
  };
  return (
    <>
      <select onChange={handleCategory}>
        <option value="">Select By Category</option>
        <option value="kids">kids</option>
        <option value="women">women</option>
        <option value="homedecor">homedecor</option>
      </select>
      <select onChange={handleOrder}>
        <option value="">Order By</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          marginTop: "20px",
        }}
      >
        {data.map((el) => (
          <Link to={`/${el.id}`}> 
            <div key={el.id}>
              <img src={el.image} alt="img" />
              <h3>{el.brand}</h3>
              <p>{el.title}</p>
              <h5>{el.category}</h5>
              <h5>{el.price}</h5>
            </div>
          </Link>
        ))}
      </div>
      <button disabled={page==1} onClick={() => handlePage(page - 1)}>Prev</button>
      {array.map((el, i) => (
        <button onClick={() => handlePage(i + 1)}>{i + 1}</button>
      ))}
      <button disabled={page==totalPages}  onClick={() => handlePage(page + 1)}>Next</button>
   
    </>
  );
};
