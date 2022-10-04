import { Search } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Container = styled.div `
    height: 60px;
    
`;
const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
`;

const Middle = styled.div `
    flex: 1;
    text-align: center;
    font-size: 14px;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;
const MenuItem = styled.div `
    font-size: 9px;
    cursor: pointer;
    margin-left: 25px;
   
`;
const Languange =styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
`;
const SearchContainer = styled.div `
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 2px;
    font-size: 8px;
   
`;
const input = styled.div `
border: none;
`;

const Navbar = () => {
  return (
    <Container>
       <Wrapper>
        <Left><Languange>EN</Languange>
        <SearchContainer>
            <input/>
          <Search style={{color:"gray",fontsize:2}}/>
            </SearchContainer></Left>
        <Middle>Welcome To Our Store</Middle>
        <Right><MenuItem>Register</MenuItem>
        <MenuItem>SignIn</MenuItem>
        <MenuItem><Badge badgeContent={4} color="primary">
        <AddShoppingCartIcon/>
    </Badge></MenuItem>
        
        
        </Right>
        
        </Wrapper> 
    </Container>
  )
}

export default Navbar