import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop/Shop';
import Contacts from '../pages/Contacts';

const Main = (props) => {
  const {stock, handleAdd} = props;

  return (
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/shop" element={ <Shop stock={ stock } handleAdd={ handleAdd }/> }/>
        <Route path="/contacts" element={ <Contacts/> }/>
      </Routes>
  )
}

export default Main;
