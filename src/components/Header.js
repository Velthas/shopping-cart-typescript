import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <nav>
      <h1>
        { 'WeShop' }
      </h1>
      <ul>
        <li>
            { 'Home' }
        </li>
        <li>
            { 'Shop' }
        </li>
        <li>
            { 'Contacts' }
        </li>
      </ul>
    </nav>
  )
}

export default Header;