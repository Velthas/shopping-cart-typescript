import SideCartItem from "./SideCartItem";
import styled from 'styled-components';

const SideCart = (props) => {
  const {cart, handleAdd, handleRemove} = props;

  const total = cart.reduce((accumulator, item) =>
    accumulator + (item.amount * item.price), 0)
      .toFixed(2);

  return (
    <CartWrapper>
      <CartHeader>
        {'My Shopping Cart'}
      </CartHeader>
      <ItemWrapper>
        { cart.map(item => 
        <SideCartItem
          key={item.id}
          product={item}
          handleAdd={ handleAdd }
          handleRemove={ handleRemove}
        />) }
      </ItemWrapper>
      <PriceWrapper>
        <p>
          {'Total price: '}
        </p>
        <p>
          {total + " €"}
        </p>
      </PriceWrapper>
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  position: absolute;
  top: 40px
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 370px;
  padding: 15px;
`

const CartHeader = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;

  margin: 20px 0;
  text-transform: uppercase;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 300px;
  width: 100%;
  overflow-y: auto;
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width:100%;

  margin: 20px 0;
`

export default SideCart;
