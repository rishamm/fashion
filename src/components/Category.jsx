import CategoryItems from "./CategoryItems";
import styled from "styled-components";
import { categories } from "../data";
const Container = styled.div`
  display: flex;
  padding: 20px;
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
