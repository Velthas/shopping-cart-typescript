import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import ShopItem from '../../pages/Shop/ShopItem';

describe('Shop Item Component', () => {
  it('renders content of item correctly', () => {
    const product = { title: 'Test', price: '10' };
    const mock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ShopItem product={product} handleAdd={mock} />
      </ThemeProvider>
    );

    const namePara = screen.getByText(/test/i);
    const pricePara = screen.getByText(product.price + ' €');

    expect(namePara).toBeInTheDocument();
    expect(pricePara).toBeInTheDocument();
  });

  it('displays buy button when hovering', () => {
    const product = { title: 'Test', price: '10' };
    const mock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ShopItem product={product} handleAdd={mock} />
      </ThemeProvider>
    );

    const divReference = screen.getByText(product.title);
    userEvent.hover(divReference);
    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
  });

  it('registers add to cart click', () => {
    const product = { title: 'Test', price: '10' };
    const mock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ShopItem product={product} handleAdd={mock} />
      </ThemeProvider>
    );

    const divReference = screen.getByText(product.title);
    userEvent.hover(divReference);
    userEvent.click(screen.getByText(/buy now/i));
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('when product is added to cart, feedback button is displayed', () => {
    const product = { title: 'Test', price: '10' };
    const mock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ShopItem product={product} handleAdd={mock} />
      </ThemeProvider>
    );

    const divReference = screen.getByText(product.title);
    userEvent.hover(divReference);
    userEvent.click(screen.getByText(/buy now/i));
    const feedbackButton = screen.getByText(/item was added to your cart/i);
    expect(feedbackButton).toBeInTheDocument();
  });
});
