import Header from '../Header';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders the container', () => {
    render(<Header/>);
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('render all links in the nav correctly', () => {
    render(<Header />);
    const navLinks = screen.getAllByRole('listitem');

    expect(navLinks[0].textContent).toMatch(/home/i);
    expect(navLinks[1].textContent).toMatch(/shop/i);
    expect(navLinks[2].textContent).toMatch(/contacts/i);
  });
});
