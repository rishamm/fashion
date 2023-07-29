import { styled } from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Badge } from "@material-ui/core";
import { Add, FavoriteBorder, LocalMall, Remove} from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
text-align:center;
${mobile({padding:"10px"})}
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

const Bottom = styled.div`
display:flex;
justify-content:space-between;
padding-top:20px;
${mobile({flexDirection:"column" })}
`;
const Info = styled.div`
flex:3;
`;
const Summary = styled.div`
flex:1;
border:0.5px solid lightgrey;
border-radius:10px;
padding:20px;
text-align:initial;
height:50vh;
${mobile({marginTop:"30px"})}
`;

const Product = styled.div`
display:flex;
justify-content:space-between;

`;
const ProductDetails = styled.div`
flex:2;
display :flex;
text-align:initial;
`;
const ProductSize = styled.span``;
const ProductName = styled.span``;
const Image = styled.img`
width :200px;`;
const ProductId = styled.span``;
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
`;
const PriceDetails = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;`;
const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const PriceAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

${mobile({marginBottom: "0px"})}


`;
const ProductAmount=styled.div`
font-size:24px;
margin:5px;
`;
const ProductPrice=styled.div`
font-size:30px;
font-weight:200;
font-size: 21px;
    font-weight: 600;
    padding-right: 22px;
    ${mobile({ fontWeight: "600",paddingRight:" 22px"})}

`;

const Hr= styled.hr`
background-color:#eee;
border:none;
height:1px;
`;
const SummaryItemPrice=styled.span`

`;
const SummaryItemText=styled.span`

`;

const SummaryItems=styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type=== "total" && "500"};
font-size:${props=>props.type=== "total" && "24px"};
`;

const SummaryTittles=styled.h1`
font-weight:200;
`;
const SummaryButton=styled.button`
padding:10px;
width:100%;
background-color:black;
color:white;
font-weight:600;
`;



const Cart = () => {

const  cart = useSelector(state=>state.cart)

  return( 
  <Container>
    <NavBar/>
    <Announcement/>
       <Wrapper>
        <Tittle>Your Bag</Tittle>
        <Top>
            <TopButton >Continue Shopping</TopButton>
            
              
            <TopButton type="filled" >Go To Checkout</TopButton>
        </Top>
        <Bottom>
            <Info>

              {cart.products.map(product=>(
        
          <Product key={product._id}> 
            
            <ProductDetails>
             <Image src={product.img}/>
<Details>
    <ProductName><b>Product :</b> {product.tittle}</ProductName>
    <ProductId><b>ID :</b> {product._id}</ProductId>
    <ProductColor color={product.color}  />
  <ProductSize><b>Size :</b> {product.size}</ProductSize>
</Details>

            </ProductDetails>
          <PriceDetails>
          <PriceAmountContainer>
         <Add/>
         <ProductAmount>{product.quantity}</ProductAmount>
         <Remove/>


          </PriceAmountContainer>

           <ProductPrice> {product.price*product.quantity}</ProductPrice>
          </PriceDetails>
          
          </Product>
          ))}
          <Hr/>
     
            </Info>
            <Summary>
              <SummaryTittles>
                Order Summary
                </SummaryTittles>
              <SummaryItems>
                <SummaryItemText>
                  Cart Total :
                </SummaryItemText>
               <SummaryItemPrice>
                Rs.{cart.total}
               </SummaryItemPrice>
              </SummaryItems>
              
              <SummaryItems>
                <SummaryItemText>
                  Shipping Charge :
                </SummaryItemText>
               <SummaryItemPrice>
                Free
               </SummaryItemPrice>
              </SummaryItems>

              <SummaryItems type="total">
                <SummaryItemText >
                  Sub Total :
                </SummaryItemText>
               <SummaryItemPrice >
                Rs.{cart.total}
               </SummaryItemPrice>
              </SummaryItems>
              <SummaryButton>Check Out</SummaryButton>
         
            </Summary>
        </Bottom>
       </Wrapper>
    <Footer/>

  </Container>

)};

export default Cart;
