import React from "react";
import { Search, ShoppingCartSharp } from "@material-ui/icons";
import styled from "styled-components";
import { Badge, colors } from "@material-ui/core";
import {mobile} from '../responsive';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60 px;
  ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  ${mobile({padding:"10px 0px "})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent:"center"})}
`;
const Centre = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
 font-decoration:none;
  font-weight: bold;
  ${mobile({fontSize:"24px"})}
`;


const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  ${mobile({flex:2,fontSize:"12px",marginLeft:"10px"})}
`;
const StyledLink = styled(Link)`

  text-decoration: none;
  color: #000;

`;
const NavBar = () => {
const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Centre>
          <StyledLink to="/">
          <Logo>Fashion</Logo>
          </StyledLink>
        </Centre>
        <Right>
        <StyledLink to="/signup">
          <MenuItems>Register</MenuItems>    </StyledLink>
          <StyledLink to="/login">   <MenuItems>Sign in</MenuItems></StyledLink>
          <Link to="/cart">
          <MenuItems>
            <Badge badgeContent={quantity} color="primary" overlap="rectangular">
              <ShoppingCartSharp color="action" />
            </Badge>
          </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
