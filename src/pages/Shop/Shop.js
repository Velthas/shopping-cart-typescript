import ShopItem from "./ShopItem";
import styled from 'styled-components';

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
  padding: 5vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5vh;

  background-color: ${ ({ theme }) => theme.colors.gray.medium };
`

export default Shop;
