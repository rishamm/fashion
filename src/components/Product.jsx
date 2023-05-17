import {
  FavoriteBorderSharp,
  SearchSharp,
  ShoppingCartRounded,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Acontainer = styled.div`
  flex: 1;
`;
const Price = styled.h2`
  display: flex;
  font-weight: 800;
  font-size: 14px;
  z-index: 3;
  align-items: center;
  justify-content: center;
  color: grey;
`;
const Desc = styled.p`
  font-size: 12px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
  border-radius: 13px;
`;
const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center; 
margin:10px;
transition: all 0.5s ease ;
&:hover{
  background-color:#e9f5f5;
  transform : scale(1.1);
`;

const InfoContainer = styled.div`
  margin-bottom: 24px;
`;
const Name = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = ({ item }) => {
  return (
    <Acontainer>
      <Container>
        <Circle />

        <Image src={item.img} />

        <Info>
          <Icon>
            <ShoppingCartRounded />
          </Icon>
          <Icon>
            <SearchSharp />
          </Icon>
          <Icon>
            <FavoriteBorderSharp />
          </Icon>
        </Info>
      </Container>
      <InfoContainer>
        <Name>{item.name}</Name>
        <Desc>{item.desc}</Desc>
        <Price>{item.price}</Price>
      </InfoContainer>
    </Acontainer>
  );
};

export default Product;
