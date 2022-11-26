import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Shop from '../../pages/Shop/Shop';

// Unnecessary use of a mock, could have just queried using getByText
// Just wanted to practice mocking a component and using data-testid
jest.mock('../../pages/Shop/ShopItem.js', () => ({ product }) => {
  return <mock-item data-testid={product.id} />;
});

const stock = [
  { title: 'Test1', price: '10', id: 1 },
  { title: 'Test2', price: '20', id: 2 },
  { title: 'Test3', price: '30', id: 3 },
];

describe('Shop Page Component', () => {
  it('renders stock correctly', () => {
    const mock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Shop stock={stock} handleAdd={mock} />
      </ThemeProvider>
    );

    const item1 = screen.getByTestId(stock[0].id);
    const item2 = screen.getByTestId(stock[1].id);
    const item3 = screen.getByTestId(stock[2].id);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
  });
});
