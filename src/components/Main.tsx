import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from '../pages/Home';
import Shop from '../pages/Shop/Shop';
import Contacts from '../pages/Contacts';
import { Product } from '../types/types';

type Props = {
  stock: Product[], 
  handleAdd: (product: Product) => void, 
}

const Main = ({stock, handleAdd}: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop stock={stock} handleAdd={handleAdd} />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  );
};

export default Main;
