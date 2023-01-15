import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShopItem = (props) => {
  const { product, handleAdd } = props;

  const [button, setButton] = useState(false);
  const [added, setAdded] = useState(false);

  const toggleButton = (bool) => setButton(bool);
  const showCartFeedback = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };
  const addToCart = () => {
    handleAdd(product);
    showCartFeedback();
  };

  return (
    <ProductContainer
      onMouseEnter={() => toggleButton(true)}
      onMouseLeave={() => toggleButton(false)}
    >
      <ImageBackdrop added={added} image={product.image}>
        { added && (
          <ConfirmButton>
            Item was added to your cart!
          </ConfirmButton>
        )}
        { button && (
          <CartButton
            type="button"
            onClick={addToCart}
          >
            { 'BUY NOW' }
          </CartButton>
        )}
      </ImageBackdrop>
      <InfoContainer>
        <NameContainer>
          {product.title}
        </NameContainer>
        <PriceContainer>
          {product.price + ' €'}
        </PriceContainer>
      </InfoContainer>
    </ProductContainer>
  );
};

ShopItem.propTypes = {
  product: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

const ProductContainer = styled.div`
  animation: appear-slowly 0.5s ease-in 1;

  background-color: white;
  border-radius: 4px;
  border: 1px solid #dfdfdf;

  max-height: 500px;
`;

const ImageBackdrop = styled.div`
  height: 300px;
  border-bottom: 1px solid #dfdfdf;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.added ? 'space-between' : 'flex-end'};
  align-items: center;
`;

const ConfirmButton = styled.button`
  padding: 10px 15px;
  margin-top: 10px;

  border: none;
  border-radius: 3px;
  opacity: 0.8;

  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.green};
`;

const CartButton = styled.button`
  width: 80%;
  margin: 10px;
  padding: 10px 20px;

  border: 1px solid black;

  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};

  font-size: 1.3rem;
  font-family: 'bebas-neue', sans-serif;
  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(10%);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 20px;
  padding: 10px;
`;

const NameContainer = styled.p`
  width: 70%;
  font-family: 'bebas-neue';
  font-size: 1.2rem;
`;

const PriceContainer = styled.p`
  width: 30%;
  text-align: end;
`;

export default ShopItem;
