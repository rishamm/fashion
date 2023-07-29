import styled from "styled-components";
import { mobile } from "../responsive";
import {Link}from 'react-router-dom'
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  


`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"60vh"})}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;
const Tittle = styled.h1`
  color: white;
  margin-bottom: 20;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Tittle>{item.tittle}</Tittle>
        <Button>Shop Now</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItems;
