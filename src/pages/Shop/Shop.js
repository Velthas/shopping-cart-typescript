import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ShopItem from './ShopItem';

const Shop = (props) => {
  const { stock, handleAdd } = props;
  return (
    <ShopWrapper>
      {stock.map((product) =>
        <ShopItem
          key={product.id}
          product={product}
          handleAdd={handleAdd}
        />
      )}
    </ShopWrapper>
  );
};

Shop.propTypes = {
  stock: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

const ShopWrapper = styled.div`
  width: 100vw;
  padding: 5vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5vh;

  background-color: ${({ theme }) => theme.colors.gray.medium};
`;

export default Shop;
