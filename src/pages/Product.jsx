import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const Tittle = styled.h1`
  font-weight: 200;
  margin: 20px 0px;
`;
const Desc = styled.p``;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const FilterContainer = styled.div`
  widht: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTittle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;
const FilterSizeOption = styled.option``;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  cursor: pointer;
  background-color: white;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;
const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://fashion-react.s3.ap-south-1.amazonaws.com/p6.png" />
        </ImageContainer>
        <InfoContainer>
          <Tittle>Nike</Tittle>

          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            aperiam error voluptate veniam repudiandae, optio iure placeat
            quidem officiis tenetur, magni illum, illo totam sapiente libero
            reiciendis id ipsam hic.
          </Desc>
          <Price>Rs.5000</Price>

          <FilterContainer>
            <Filter>
              <FilterTittle>Color</FilterTittle>
              <FilterColor color="Black" />
              <FilterColor color="Blue" />
              <FilterColor color="Grey" />
              <FilterColor color="Green" />
              <FilterColor color="Red" />
            </Filter>

            <Filter>
              <FilterTittle>Size</FilterTittle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
