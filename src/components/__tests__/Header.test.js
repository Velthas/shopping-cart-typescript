import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  const incr = jest.fn();
  const decr = jest.fn();
  const cart = [];
  const wrappedHeader = (
  <MemoryRouter> 
    <Header
      handleAdd={incr}
      handleRemove={decr}
      cart={cart}
    /> 
  </MemoryRouter>
  );

  it('renders the container', () => {
    render(wrappedHeader);
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('render all links and cart image in the nav correctly', () => {
    render(wrappedHeader);
    const navLinks = screen.getAllByRole('listitem');
    const cartImage = screen.getByRole('img');

    expect(navLinks[0].textContent).toMatch(/home/i);
    expect(navLinks[1].textContent).toMatch(/shop/i);
    expect(navLinks[2].textContent).toMatch(/contacts/i);
    expect(cartImage).toBeInTheDocument();
  });
});
