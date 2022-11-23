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
      <div>
        <button>
          {'Proceed to checkout'}
        </button>
        <button>
          {'Close Cart'}
        </button>
      </div>
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
  justify-content: space-between;
  align-items: center;

  width:100%;

  margin: 20px 0;
`

const Button = styled.div`
  padding: 10px 20px;
  font-size: 1.1rem;

  border-radius: 4px;
`

const CheckoutButton = styled(Button)`

`

const CloseButton = styled(Button)`

`

export default SideCart;
