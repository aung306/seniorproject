import { render, screen } from '@testing-library/react';
import Index from '../routes/_index'; // Adjust the import path if needed

describe('Index Page', () => {
  test('renders without crashing and displays key text', () => {
    render(<Index />); // Render the Index component

    // Check if the text "RhythmAI" appears in the document
    expect(screen.getByText(/RhythmAI/i)).toBeInTheDocument();
    
    // Check if the text "Composer Bot" appears in the document
    expect(screen.getByText(/Composer Bot/i)).toBeInTheDocument();
    
    // Check if the "Compose" button is present by targeting the button role
    expect(screen.getByRole('button', { name: /Compose/i })).toBeInTheDocument();
  });
});
