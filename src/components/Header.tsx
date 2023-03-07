import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SideCart from './Cart/SideCart.tsx';
import cartIcon from '../assets/images/shop.svg';
import { Product } from '../types/types';

type Props = {
  cart: Product[],
  handleAdd: (product: Product) => void,
  handleRemove: (product: Product) => void
};

const Header = ({cart, handleAdd, handleRemove}: Props) => {
  const [cartDisplay, setCartDisplay] = useState(false);
  const toggleCartDisplay = () => setCartDisplay(!cartDisplay);

  const productAmount = cart.reduce((accumulator: number, item: Product): number => {
   if(item.amount) return accumulator + item.amount;
   else return accumulator;
  }, 0);

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
            src={cartIcon}
            alt="Cart Icon"
            onClick={toggleCartDisplay}
          />
          { productAmount > 0 && (
            <AmountBubble>
              {productAmount}
            </AmountBubble>
          )}
        </CartLink>
        { cartDisplay && (
        <SideCart
          cart={cart}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          toggleCartDisplay={toggleCartDisplay}
        />
        )}
      </NavContainer>
    </Navbar>
  );
};

const Logo = styled.h1`
  font-weight: normal;
  font-family: 'vogue', sans-serif;
  font-size: 3rem; 

  margin-top: 10px;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.dark};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;
  height: 10vh;

  box-shadow: 0px 3px 7px 0px #dadada;
  min-height: 80px;

  @media(max-width: 700px) {
    height: 20vh;
    flex-direction: column;
    min-height: 120px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  list-style: none;

  margin: 0;
  padding: 0;
`;

const CartIcon = styled.img`
  height: 30px;
`;

const AmountBubble = styled.div`
  position: absolute;
  z-index: 300;
  bottom: 0;
  right: 0;

  text-align: center;
  border-radius: 20px;

  height: 20px;
  width: 20px;

  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};

  font-size: 0.8rem;
`;

const NavLink = styled.li`
  padding: 10px 20px;
  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`;

const CartLink = styled(NavLink)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-radius: 80px;
  padding: 8px;

  &:hover{
    transform: none;
    filter: brightness(85%);
  }
`;

export default Header;
