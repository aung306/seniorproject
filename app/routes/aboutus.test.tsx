import { render, screen } from '@testing-library/react';
import AboutUs from './aboutus';

describe('About Us Page', () => {
  test('renders without crashing and displays key text', () => {
    render(<AboutUs />);

    expect(screen.getByText(/Angela/i)).toBeInTheDocument();
    expect(screen.getByText(/David/i)).toBeInTheDocument();

  });
});
