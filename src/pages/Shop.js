import ShopItem from "../components/ShopItem";
import styled from 'styled-components';

import background from '../assets/images/background-test.jpg'

const Shop = (props) => {
  const { stock, handleAdd } = props;
  return (
    <ShopWrapper>
      {stock.map(product => 
        <ShopItem
          key={product.id}
          product={product}
          handleAdd={handleAdd} 
        />
      )}
    </ShopWrapper>
  )
}

const ShopWrapper = styled.div`
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  background-image: url(${background});
  background-repeat: repeat;
`

export default Shop;
