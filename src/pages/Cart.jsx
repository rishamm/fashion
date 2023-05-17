import { styled } from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Badge } from "@material-ui/core";
import { FavoriteBorder, LocalMall} from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
text-align:center;
`;
const Tittle = styled.h1`
font-weight:300;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;`;
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==="filled"&&"none"};
background-color:${(props)=>props.type==="filled"?"black":"transparent"};
color:${(props)=>props.type==="filled"&&"white"};
`;
const TopTexts=styled.div`
display:flex;

`;
const TopText=styled.div`
cursor:pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content:space-between;
`;
const Info = styled.div`
flex:3;
`;
const Summary = styled.div`
flex:1;
`;


const Cart = () => {
  return( 
  <Container>
    <NavBar/>
    <Announcement/>
       <Wrapper>
        <Tittle>Your Bag</Tittle>
        <Top>
            <TopButton >Continue Shopping</TopButton>
              <TopTexts>
               <TopText>
               <Badge badgeContent={3} color="primary">
                  <LocalMall />   
               </Badge>
               </TopText>
               <TopText>
               <Badge badgeContent={10} color="secondary">
                  <FavoriteBorder />   
               </Badge>
                </TopText>
              </TopTexts>
              
            <TopButton type="filled" >Go To Checkout</TopButton>
        </Top>
        <Bottom>
            <Info>
          <Product>
            <ProductDetails>
             <Image src=""/>
<Details>
    <ProductName>
        <b>product:</b> 
    </ProductName>
</Details>

            </ProductDetails>
          <PriceDetails></PriceDetails>
          
          </Product>
            </Info>
            <Summary>synjbsdbi</Summary>
        </Bottom>
       </Wrapper>
    <Footer/>

  </Container>

)};

export default Cart;
