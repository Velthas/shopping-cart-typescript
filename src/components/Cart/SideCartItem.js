import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

import styled from 'styled-components';

const SideCartItem = (props) => {
  const {product, handleAdd, handleRemove} = props;

  const shortenedName = product.title.length > 15 
  ? product.title.slice(0, 15) + '...'
  : product.title;

  return (
    <EntryWrapper>
      <ProductImg src={ product.image } alt={ product.title }/>
      <ProductInfoWrapper>
        <h4>
          { shortenedName }
        </h4>
        <QuantityContainer>
          <QuantityIcon 
            src={ minus } 
            alt='Minus icon'
            onClick={() => handleRemove(product)}
          />
          <p>
            { product.amount }
          </p>
          <QuantityIcon
            src={ plus }
            alt='Plus icon'
            onClick={() => handleAdd(product)}
          />
        </QuantityContainer>
        <p>
          { (product.amount * product.price) + '€' }
        </p>
      </ProductInfoWrapper>
    </EntryWrapper>
  )
}

const EntryWrapper = styled.div`
  display: flex;
  height: 100px;

  margin: 10px 5px;
`

const ProductImg = styled.img`
  height: 100px;
  width: 100px;
`

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 10px;
`

const QuantityContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  width: 100%;
`

const QuantityIcon = styled.img`
  background-color: gray;
  height: 18px;
  width: 18px;
`

export default SideCartItem;
