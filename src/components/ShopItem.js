import { useState } from 'react';
import styled from 'styled-components';

const ShopItem = (props) => {
  const {product, handleAdd} = props

  const [button, setButton] = useState(false);

  const toggleButton = (bool) => setButton(bool); 

  return (
    <ProductContainer 
      onMouseEnter={() => toggleButton(true)}
      onMouseLeave={()=> toggleButton(false)}
    >
      <ImageBackdrop image={product.image}>
        { button &&
          <CartButton 
            type="button"
            onClick={() => handleAdd(product)}
          >
            { "BUY NOW" }
          </CartButton>
        }
      </ImageBackdrop>   
      <InfoContainer>
        <NameContainer>
          {product.title}
        </NameContainer>
        <PriceContainer>
          {product.price + " €"}
        </PriceContainer>
      </InfoContainer>
    </ProductContainer>
  )
}

const ProductContainer = styled.div `
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
`

const ImageBackdrop = styled.div`
  height: 300px;
  border-bottom: 1px solid #dfdfdf;

  background-image: url(${ (props) => props.image });
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const CartButton = styled.button `
  width: 80%;
  margin: 10px;
  padding: 10px 20px;

  border: 1px solid black;

  background-color: ${({ theme }) =>  theme.colors.dark };
  color: ${({ theme }) =>  theme.colors.light };

  font-size: 1.3rem;
  font-family: 'bebas-neue', sans-serif;
  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(10%);
  }
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 20px;
  padding: 10px;
`

const NameContainer = styled.p`
  width: 70%;
  font-family: 'bebas-neue';
  font-size: 1.2rem;
`

const PriceContainer = styled.p`
  width: 30%;
  text-align: end;
`

export default ShopItem;
