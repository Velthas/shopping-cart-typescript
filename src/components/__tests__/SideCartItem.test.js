import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import SideCartItem from '../Cart/SideCartItem';

describe('Product Item Component', () => {
  const item = {
    title: 'Test',
    image: '../../assets/images/shop.svg',
    amount: '2',
    price: '10',
  };

  it('appropriately renders product information', () => {
    const mock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <SideCartItem product={item} handleAdd={mock} handleRemove={mock} />
      </ThemeProvider>
    );

    const cardHeading = screen.getByRole('heading', { name: /test/i });
    const cardImg = screen.getByAltText(/test/i);
    const plusImg = screen.getByAltText(/plus icon/i);
    const minusImg = screen.getByAltText(/minus icon/i);
    const amountPara = screen.getByText(item.amount);
    const totalCostPara = screen.getByText((item.price * item.amount).toFixed(2) + '€');

    expect(cardHeading).toBeInTheDocument();
    expect(cardImg).toBeInTheDocument();
    expect(plusImg).toBeInTheDocument();
    expect(minusImg).toBeInTheDocument();
    expect(amountPara).toBeInTheDocument();
    expect(totalCostPara).toBeInTheDocument();
  });

  it('registers clicks on increase and decrease icons', () => {
    const addMock = jest.fn();
    const decrMock = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <SideCartItem product={item} handleAdd={addMock} handleRemove={decrMock} />
      </ThemeProvider>
    );

    const plusImg = screen.getByAltText(/plus icon/i);
    const minusImg = screen.getByAltText(/minus icon/i);

    userEvent.click(plusImg);
    userEvent.click(minusImg);

    expect(addMock).toHaveBeenCalledTimes(1);
    expect(decrMock).toHaveBeenCalledTimes(1);
  });
});
