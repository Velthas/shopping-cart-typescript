import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Contacts from '../pages/Contacts';
import Cart from '../pages/Cart';

const Main = (props) => {
  const {stock, handleAdd} = props;

  return (
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/shop" element={ <Shop stock={ stock } handleAdd={ handleAdd }/> }/>
        <Route path="/contacts" element={ <Contacts/> }/>
        <Route path="/cart" element={ <Cart/> }/>
      </Routes>
  )
}

export default Main;