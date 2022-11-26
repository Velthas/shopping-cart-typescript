import { Routes, Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import Home from '../pages/Home';
import Shop from '../pages/Shop/Shop';
import Contacts from '../pages/Contacts';

const Main = (props) => {
  const { stock, handleAdd } = props;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop stock={stock} handleAdd={handleAdd} />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  );
};

Main.propTypes = {
  stock: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default Main;
