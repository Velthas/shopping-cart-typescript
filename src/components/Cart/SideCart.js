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
      <ButtonWrapper>
        <CheckoutButton>
          {'Proceed to checkout'}
        </CheckoutButton>
        <CloseButton>
          {'Close Cart'}
        </CloseButton>
      </ButtonWrapper>
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  position: absolute;
  top: 10vh;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 370px;
  padding: 15px;

  background-color: white;
  border: 1px solid #dfdfdf;
`

const CartHeader = styled.h2`
  font-family: 'bebas-neue';
  font-size: 1.5rem;
  font-weight: normal;
  color: black;

  width: 100%;
  margin: 0;
  align-self: flex-start;
  border-bottom: 1px solid #dfdfdf;
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
  justify-content: space-between;
  align-items: center;

  width:100%;
  margin: 20px 0;

  font-size: 1.1rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-top: 10px;

  width: 100%;
  gap: 10px;
`

const Button = styled.button`
  padding: 10px 20px;
  width: 80%;
  text-align: center;

  font-size: 1.3rem;
  font-family: 'bebas-neue', sans-serif;

  border-radius: 4px;
  transition: 0.3 ease-out;
`

const CheckoutButton = styled(Button)`
  color: white;
  background-color: black;
  border: 3px solid black;

  &:hover{
    transform: scale(1.05);
  }
`

const CloseButton = styled(Button)`
  color: black;
  background-color: transparent;
  border: 3px solid black;

  &:hover{
    transform: scale(1.05);
  }
`

export default SideCart;
