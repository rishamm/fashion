import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``;
const Tittle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Tittle>Shop</Tittle>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select defaultValue="Color">
            <Option disabled>Color</Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Grey</Option>
          </Select>
          <Select defaultValue="Size">
            <Option disabled>Size</Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
            <Option>Extra Large</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select defaultValue="Newest">
            <Option>Newest</Option>
            <Option>Price Low-High</Option>
            <Option>Price High-Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
