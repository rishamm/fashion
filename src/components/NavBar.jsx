import React from 'react'
import{Search, ShoppingCartSharp} from '@material-ui/icons'
import styled from 'styled-components'
import { Badge, colors } from '@material-ui/core'


const Container = styled.div`
 height:60 px;
`
const Wrapper = styled.div`
padding : 10px 20px;
display: flex;
align-items:center;
`
const Left= styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language = styled.span`
  font-size:14px;
  curser:pointer;
`;
const SearchContainer=styled.div`
border: 0.5px solid lightgrey;
display :flex;
align-items:center;
margin-left:25px;
padding:5px; 
`;

const Input=styled.input`
border:none;
`;
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;
const Centre=styled.div`
flex:1;
text-align:center;
`;
const Logo=styled.h1`
font-weight:bold;
`;
const MenuItems=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
     <Left><Language>EN</Language>
     <SearchContainer>
        <Input/>
        <Search style={{color:"grey",fontSize:16 }}/>
     </SearchContainer>
     
     </Left>
     <Centre><Logo>Fasion</Logo></Centre>
     <Right>
        <MenuItems>Register</MenuItems>
        <MenuItems>Sign in</MenuItems>
        <MenuItems><Badge badgeContent={4} color="primary">
  <ShoppingCartSharp color="action" />
</Badge></MenuItems>
     </Right>
        </Wrapper>
      
        
        </Container>
  )
}

export default NavBar