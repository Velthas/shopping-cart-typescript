import React from 'react';
import styled from 'styled-components';

import { Product } from '../../types/types';
// @ts-ignore
import ShopItem from './ShopItem.tsx';

type Props = {
  stock: Array<Product>,
  handleAdd: (product: Product) => void,
};

const Shop = ({stock, handleAdd}: Props) => {
  return (
    <ShopWrapper>
      {stock.map((product: Product) =>
        <ShopItem
          key={product.id}
          product={product}
          handleAdd={handleAdd}
        />
      )}
    </ShopWrapper>
  );
};

const ShopWrapper = styled.div`
  min-height: calc(90vh - 50px);
  max-width: 100vw;
  padding: 5vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5vh;

  background-color: ${({ theme }) => theme.colors.gray.medium};
`;

export default Shop;
