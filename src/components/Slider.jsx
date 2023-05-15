import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@material-ui/icons"
import { styled } from "styled-components"

import { useState } from "react";
import {SliderItems} from '../data.js'
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
overflow:hidden;
position:relative;
`
const Arrow=styled.div`
  height :50px;
  width:50px;
  background-color:#fff7f7;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  margin:auto;
  left:${props=>props.direction ==="left" && "10px"};
  right:${props=>props.direction ==="right" && "10px"};
  cursor:pointer;
  overflow:visible;
  z-index:2;
`;

const Wrapper=styled.div`
 height:100%;
 width:100%;
  display:flex;
  transition: all 1.5s ease;
transform:translateX(${props=> props.slideIndex * -100}vw);

`;

const Slide=styled.div`
display:flex;
align-items:center;
height:100vh;
width:100vw;
margin:auto; 
background-color:#${props=>props.bg};


`;
const ImageContainer=styled.div`
flex:1;
height:100%;
width:100vw;

`;
const Image=styled.img`

height:80%;
padding:20px 180px 0px 165px; 
`
const InfoContainer=styled.div`
flex:1;
padding:50px 0px 0px 0px;
`;

const Tittle =styled.h1`
font-size:70px;
`;
const Desc =styled.p`
margin:50px 0px;
font-sixe:20px;
font-weight:500;
letter-spacing:3px

`;
const Button =styled.button`
padding:10px;
font-size:20px;
background-color:transparent;

`;


const Slider = () => {
   const [slideIndex,setSlideIndex]=useState(0);


   const handleClick=(direction)=>{
       if (direction==="left"){
        setSlideIndex(slideIndex > 0 ?slideIndex -1 :2);
       }else {

        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
       }
   }



  return (
<Container>
    <Arrow direction="left"  onClick={()=>handleClick("left")}>
        <ArrowBackIosRounded/>
      
    </Arrow>
    <Wrapper slideIndex={slideIndex}> 
    {SliderItems.map((item)=>
      <Slide bg={item.bg} >
    
     <ImageContainer>
        <Image src={item.img} alt='MyImage'/>
     </ImageContainer>

     <InfoContainer>
         <Tittle>{item.tittle}</Tittle>
         <Desc>{item.desc}</Desc>
         <Button>Shop Now</Button>
     </InfoContainer>
     
     
     </Slide>
   
    )}
   
    </Wrapper>
    <Arrow direction="right"  onClick={()=>handleClick("right")}>
        <ArrowForwardIosRounded/>
      
    </Arrow>
</Container>
  )
}

export default Slider