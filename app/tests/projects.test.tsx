import { render, screen } from '@testing-library/react';
import Projects from '../routes/projects';

describe('Projects Page', () => {
  test('renders without crashing and displays key text', () => {
    render(<Projects />);

    expect(screen.getByText(/RhythmAI/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();

  });
});
