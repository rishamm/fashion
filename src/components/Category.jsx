import CategoryItems from "./CategoryItems";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({padding:"0px",flexDirection:"column"})}
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
