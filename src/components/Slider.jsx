import React from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
   
    position: relative;

`;

const Wrapper =styled.div `
  height: 100%;

`;
const Slide = styled.div `
  width: 100vh;
  height:100vh;
  display: flex;
  align-items: center;
  
  
`;
const ImgContainer = styled.div `
  flex:1;
  height: 100%;

`;

const Image = styled.img `
  height: 80%;
`;
const InfoContainer = styled.div `
  flex:1;
  padding: 50px;
`;
const Title = styled.h1 `
font-size: 70px;

`;
const Desc = styled.p `
margin: 50px 0px;
font-size:20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button `
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;


const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props=>props.direction ==="left" && "10px"};
    right:${props=>props.direction ==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;


`;

export const Slider = () => {
  return (
   <Container>
<Arrow direction="left">
<ArrowLeftIcon/>
</Arrow>
<Wrapper>
  <Slide>
<ImgContainer>
<Image src="https://c8.alamy.com/comp/2AKBWF7/shopping-cart-and-tablet-holding-on-hand-asian-woman-isolated-on-white-background-e-commerce-online-concept-2AKBWF7.jpg"/>
</ImgContainer>
<InfoContainer>
<Title>Summer Sale</Title>
<Desc>DON'T COMPERMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
<Button>SHOP NEW</Button>
</InfoContainer>
</Slide>
</Wrapper>

<Arrow direction="right">
<ArrowRightIcon/>
</Arrow>


   </Container>
  )
}
export default Slider;