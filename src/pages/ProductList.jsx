import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import{useState}from 'react'
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
  ${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}

`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}

`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`;
const Option = styled.option``;
const ProductList = () => {
 
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters,setFilters]=  useState({})
  const [sort,setSorts]= useState("new")
  const handleFilters =(e)=>{
  const value = e.target.value;
   setFilters({
    ...filters,
    [e.target.name]:value,
   })

  }
  return ( 
    <Container>
      <NavBar />
      <Announcement />
      <Tittle>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Tittle>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select name="color" onChange={handleFilters} defaultValue="Color">
            <Option disabled>Color</Option>
            <Option value="Black">Black</Option>
            <Option value="White">White</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Red">Red</Option>
            <Option value="Grey">Grey</Option>
          </Select>
          <Select name="size" onChange={handleFilters} defaultValue="Size">
            <Option disabled>Size</Option>
            <Option value="S">Small</Option>
            <Option value="M">Medium</Option>
            <Option value="L">Large</Option>
            <Option value="XL">Extra Large</Option>
            <Option value="XXL">XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select name="sort" onChange={(e)=> setSorts(e.target.value)} defaultValue="new">
            <Option value="new">Newest</Option>
            <Option value="asc">Price Low-High</Option>
            <Option value="desc">Price High-Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters}  sort={sort} isHomePage={true} />
      <Footer /> 
    </Container>
  );
};

export default ProductList;
