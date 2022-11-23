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
      <h1>
        { 'WeShop' }
      </h1>
      <NavContainer>
        <NavLink>
          <Link to="/">  
            { 'Home' }
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/shop">  
            { 'Shop' } 
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/contacts">
            { 'Contacts' }
          </Link>
        </NavLink>
        <CartLink>
          <CartIcon
           src={ cartIcon }
           alt="Cart Icon"
           onClick={toggleCartDisplay}
          />
          { 
            cartDisplay &&
            <SideCart
              cart={ cart }
              handleAdd={ handleAdd }
              handleRemove={ handleRemove }
            /> 
          }
        </CartLink>
      </NavContainer>
    </Navbar>
  )
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 10vh;
  padding: 20px;
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
`

const CartLink = styled(NavLink)`
  position: relative;
`

export default Header;
