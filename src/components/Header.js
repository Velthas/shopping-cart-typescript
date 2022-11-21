import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <nav>
      <h1>
        { 'WeShop' }
      </h1>
      <ul>
        <li>
          <Link to="/">  { 'Home' } </Link>
        </li>
        <li>
          <Link to="/shop">  { 'Shop' } </Link>
        </li>
        <li>
          <Link to="/contacts"> { 'Contacts' } </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;