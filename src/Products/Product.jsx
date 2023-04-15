import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Products/Product.action";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, Button, Flex, Image, Select, SimpleGrid } from "@chakra-ui/react";
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
    <Flex w="50%" m="10px">
    <Select onChange={handleCategory}>
        <option value="">Select By Category</option>
        <option value="kids">kids</option>
        <option value="women">women</option>
        <option value="homedecor">homedecor</option>
      </Select>
      <Select onChange={handleOrder}>
        <option value="">Order By</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </Select>
    </Flex>
      
    <SimpleGrid columns={[1,2,3, 4]} spacing='40px' mt="30px" mb="30px">
      
        {data.map((el) => (
          <Link to={`/${el.id}`}> 
            <Box key={el.id}  boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}>
              <Image src={el.image} alt="img" w="100% "/>
              <h3>{el.brand}</h3>
              <p>{el.title}</p>
              <h5>{el.category}</h5>
              <h5>{el.price}</h5>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
      <Button disabled={page==1} onClick={() => handlePage(page - 1)}>Prev</Button>
      {array.map((el, i) => (
        <Button onClick={() => handlePage(i + 1)} color={"black"} spacing="5">{i + 1}</Button>
      ))}
      <Button disabled={page==totalPages}  onClick={() => handlePage(page + 1)}>Next</Button>
   
    </>
  );
};
