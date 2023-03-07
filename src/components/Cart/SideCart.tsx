import React from 'react';
import styled from 'styled-components';

import SideCartItem from './SideCartItem.tsx';
import { Product } from '../../types/types';

type Props = {
  cart: Product[],
  handleAdd: (product: Product) => void,
  handleRemove: (product: Product) => void,
  toggleCartDisplay: () => void,
}

function SideCart({cart, handleAdd, handleRemove, toggleCartDisplay}: Props) {
  const total = cart.reduce((accumulator, item) => {
    if(item.amount) return accumulator + (item.amount * item.price);
    else return accumulator;
  }, 0).toFixed(2);

  const notifyUser = () => alert('Hello! This project does not include a checkout option, so this would be the end of the demo! Thank you for using it!');

  return (
    <CartWrapper>
      <CartHeader>
        {'My Shopping Cart'}
      </CartHeader>
      <ItemWrapper>
        { cart.map(item => (
          <SideCartItem
            key={item.id}
            product={item}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        )) }
      </ItemWrapper>
      <PriceWrapper>
        <p>
          {'Total price: '}
        </p>
        <p>
          {total + ' €'}
        </p>
      </PriceWrapper>
      <ButtonWrapper>
        <CheckoutButton onClick={notifyUser}>
          {'Proceed to checkout'}
        </CheckoutButton>
        <CloseButton onClick={toggleCartDisplay}>
          {'Close Cart'}
        </CloseButton>
      </ButtonWrapper>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  position: absolute;
  z-index: 300;
  top: 10vh;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 370px;
  padding: 15px;

  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};

  @media(max-width:700px) {
    top: 20vh;
  }

  @media(max-width: 500px) {
    width: 100vw;
  }
`;

const CartHeader = styled.h2`
  font-family: 'bebas-neue';
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.dark};

  width: 100%;
  margin: 0;
  align-self: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 300px;
  width: 100%;

  overflow-y: auto;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width:100%;
  margin: 20px 0;

  font-size: 1.1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-top: 10px;

  width: 100%;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 80%;
  text-align: center;

  font-size: 1.3rem;
  font-family: 'bebas-neue', sans-serif;

  border-radius: 4px;
  transition: 0.3 ease-out;
`;

const CheckoutButton = styled(Button)`
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.dark};
  border: 3px solid ${({ theme }) => theme.colors.dark};

  &:hover{
    transform: scale(1.05);
  }
`;

const CloseButton = styled(Button)`
  color: ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.dark};

  &:hover{
    transform: scale(1.05);
  }
`;

export default SideCart;
