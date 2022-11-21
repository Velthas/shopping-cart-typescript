import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';


function App() {
  const [products, setProducts] = useState([])
  useEffect(() => { 
    const getClothes = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=10');
      const dataArray = await response.json();
      setProducts(dataArray);
    }
    getClothes();
   }, []);

  const [cart, setCart] = useState([]);
  const handleAdd = (item) => {
    const isNotIn = cart.length === cart.filter(product => item.id !== product.id).length;

    if(isNotIn) setCart(cart.concat([{...item, amount: 1}]));
    else {
      const updatedCart = cart.map(product => {
        if(product.id === item.id) product.amount += 1;
        return product;
      })
      setCart(updatedCart);
    }
  }

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Main stock={ products } handleAdd={ handleAdd }/>
    </BrowserRouter>
    </>
  );
}

export default App;
