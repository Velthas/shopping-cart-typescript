import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

describe('Header Component', () => {
  const incr = jest.fn();
  const decr = jest.fn();
  const wrappedHeader = (cart) =>  (
  <MemoryRouter> 
    <ThemeProvider theme={theme}>
      <Header
        handleAdd={incr}
        handleRemove={decr}
        cart={cart}
      /> 
    </ThemeProvider>
  </MemoryRouter>
  );

  it('renders the container', () => {
    const cart = [];
    render(wrappedHeader(cart));

    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('render all links and cart image in the nav correctly', () => {
    const cart = [];
    render(wrappedHeader(cart));
    const navLinks = screen.getAllByRole('listitem');
    const cartImage = screen.getByRole('img');

    expect(navLinks[0].textContent).toMatch(/home/i);
    expect(navLinks[1].textContent).toMatch(/shop/i);
    expect(navLinks[2].textContent).toMatch(/contacts/i);
    expect(cartImage).toBeInTheDocument();
  });

  it('amount of items not displayed when cart is empty', () => {
    const cart = [];
    render(wrappedHeader(cart));

    const cartBubble = screen.queryByText('0');

    expect(cartBubble).toBe(null);
  });

  it('amount of items displayed when cart is full', () => {
    const fullCart = [{amount: 3}, {amount: 5}];
    render(wrappedHeader(fullCart));
    
    const cartBubble = screen.getByText(fullCart.reduce((a, i) => a + i.amount, 0));

    expect(cartBubble).toBeInTheDocument();
  });
});
