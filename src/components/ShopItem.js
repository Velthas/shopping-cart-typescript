import { useState } from 'react';
import styled from 'styled-components';

const ShopItem = (props) => {
  const {product, handleAdd} = props

  const [button, setButton] = useState(false);

  const toggleButton = (bool) => setButton(bool); 

  return (
    <div 
      onMouseEnter={() => toggleButton(true)}
      onMouseLeave={()=> toggleButton(false)}
    >
      <div>
        { button &&
          <button 
            type="button"
            onClick={() => handleAdd(product)}
          >
            { "BUY NOW" }
          </button>
        }
      </div>   
      <div>
        <p>
          {product.title}
        </p>
        <p>
          {product.price + " €"}
        </p>
      </div>
    </div>
  )
}

export default ShopItem;