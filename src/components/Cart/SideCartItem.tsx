import React from 'react';
import styled from 'styled-components';

import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';
import { Product } from '../../types/types';

type Props = {
  product: Product,
  handleAdd: (shopProduct: Product) => void,
  handleRemove: (shopProduct: Product) => void, 
}

const SideCartItem = ({product, handleAdd, handleRemove}: Props) => {
  const shortenedName = product.title.length > 15
    ? `${product.title.slice(0, 15)}...`
    : product.title;
  const total = (product.amount ? product.amount * product.price : 0).toFixed(2);

  return (
    <EntryWrapper>
      <ProductImg src={product.image} alt={product.title} />
      <ProductInfoWrapper>
        <h4>
          { shortenedName }
        </h4>
        <QuantityContainer>
          <QuantityIcon
            src={minus}
            alt="Minus icon"
            onClick={() => handleRemove(product)}
          />
          <p>
            { product.amount }
          </p>
          <QuantityIcon
            src={plus}
            alt="Plus icon"
            onClick={() => handleAdd(product)}
          />
        </QuantityContainer>
        <p>
          { `${total}€` }
        </p>
      </ProductInfoWrapper>
    </EntryWrapper>
  );
};

const EntryWrapper = styled.div`
  display: flex;

  padding: 20px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
`;

const ProductImg = styled.img`
  height: 100px;
  width: 100px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  width: 100%;
`;

const QuantityIcon = styled.img`
  background-color: ${({ theme }) => theme.colors.gray.light};
  height: 18px;
  width: 18px;

  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover{
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
`;

export default SideCartItem;
