import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/shared.css';

import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import Footer from './components/Footer.tsx';

import { Product } from './types/types';

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getClothes = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const productArray: Product[] = await response.json();
      const dataArray = productArray.filter((item) => item.category !== 'electronics');
      setProducts(dataArray);
    };
    getClothes();
  }, []);

  const handleAdd = (item: Product): void => {
    const isNotIn = cart.length === cart.filter((product: Product) => item.id !== product.id).length;
    if (isNotIn) setCart(cart.concat([{ ...item, amount: 1 }]));
    else {
      const updatedCart = cart.map((product: Product) => {
        if (product.id === item.id && product.amount) product.amount += 1;
        return product;
      });
      setCart(updatedCart);
    }
  };

  const handleRemove = (cartItem: Product): void => {
    const isLastOne = cartItem.amount === 1;
    if (isLastOne) setCart(cart.filter((item) => item.id !== cartItem.id));
    else {
      const updatedCart = cart.map((item) => {
        if (item.id === cartItem.id && item.amount) item.amount -= 1;
        return item;
      });
      setCart(updatedCart);
    }
  };

  return (
    <BrowserRouter basename="shopping-cart">
      <Header
        cart={cart}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
      <Main
        stock={products}
        handleAdd={handleAdd}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
