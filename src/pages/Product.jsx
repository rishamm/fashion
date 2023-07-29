import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProducts } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "90vh" })}
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
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const FilterContainer = styled.div`
  widht: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ widht: "100%" })}
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
  ${mobile({ width: "100%" })}
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
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuatity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const encodedId = encodeURIComponent(id);
        const res = await publicRequest.get(`/product/find/${encodedId}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    getProduct();
  }, [id]);

  function handleQuantity(type) {
    if (type == "dec") {
      quantity > 1 && setQuatity(quantity - 1);
    } else {
      setQuatity(quantity + 1);
    }
  }

  const handleClick = () => {
    //upadate cart
    dispatch(addProducts({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Tittle>{product.tittle}</Tittle>

          <Desc>{product.desc}</Desc>
          <Price>Rs.{product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTittle>Color</FilterTittle>
              {product.color ? (
                product.color.map((c) => (
                  <FilterColor
                    color={c}
                    key={c}
                    onClick={() => setColor(c)}
                  />
                ))
              ) : (
                <optgroup label="No colors available">
                  <option disabled>No colors available</option>
                </optgroup>
              )}
            </Filter>

            <Filter>
              <FilterTittle>Size</FilterTittle>
              <FilterSize
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size && product.size.length > 0 ? (
                  <>
                    <option disabled value="">
                      Select size
                    </option>
                    {product.size.map((s) => (
                      <FilterSizeOption key={s} value={s}>
                        {s}
                      </FilterSizeOption>
                    ))}
                  </>
                ) : (
                  <option disabled>No size available</option>
                )}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
