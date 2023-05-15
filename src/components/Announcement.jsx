import { styled } from "styled-components"

const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:500;
font-size:14px;
`;

const Announcement = () => {
  return (
    <Container>Free Shipping On Orders Above Rs.2000</Container>
  )
}

export default Announcement