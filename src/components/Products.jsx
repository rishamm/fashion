import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios  from 'axios'
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filters, sort ,isHomePage}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = cat
          ? `https://glamorous-lime-pea-coat.cyclic.cloud/api/product?category=${cat}`
          : "https://glamorous-lime-pea-coat.cyclic.cloud/api/product";
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    getProducts();
  }, [cat]);

  const filteredProducts = filters
    ? products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "new") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "asc") {
      return a.price - b.price;
    } else if (sort === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });


  return (
    <Container>
      {cat
        ? sortedProducts.map((item) => (
            <Product item={item} key={item._id} isHomePage={isHomePage} />
          ))
        : products.slice(0, 4).map((item) => (
            <Product item={item} key={item._id} isHomePage={isHomePage} />
          ))}
    </Container>
  );
};



export default Products;