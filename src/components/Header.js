import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SideCart from './Cart/SideCart';

import cartIcon from '../assets/images/shop.svg'

const Header = (props) => {
  const {cart, handleAdd, handleRemove} = props;

  const [cartDisplay, setCartDisplay] = useState(false);

  const toggleCartDisplay = () => setCartDisplay(!cartDisplay);

  return (
    <Navbar>
      <Logo>
        { 'WeShop' }
      </Logo>
      <NavContainer>
        <NavLink>
          <StyledLink to="/">  
            { 'Home' }
          </StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/shop">  
            { 'Shop' } 
          </StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/contacts">
            { 'Contacts' }
          </StyledLink>
        </NavLink>
        <CartLink>
          <CartIcon
           src={ cartIcon }
           alt="Cart Icon"
           onClick={toggleCartDisplay}
          />
        </CartLink>
        { cartDisplay &&
            <SideCart
              cart={ cart }
              handleAdd={ handleAdd }
              handleRemove={ handleRemove }
              toggleCartDisplay={ toggleCartDisplay }
            /> 
          }
      </NavContainer>
    </Navbar>
  )
}

const Logo = styled.h1`
  font-weight: normal;
  font-family: 'vogue', sans-serif;
  font-size: 3rem; 

  margin-top: 10px;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.dark };
`

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;
  height: 10vh;

  box-shadow: 0px 3px 7px 0px #e1dddd;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.dark };
`

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  list-style: none;

  margin: 0;
  padding: 0;
`

const CartIcon = styled.img`
  height: 30px;
`

const NavLink = styled.li`
  padding: 10px 20px;
  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`

const CartLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.gray.light };
  border-radius: 80px;
  padding: 8px;

  &:hover{
    transform: none;
    filter: brightness(85%);
  }
`

export default Header;
