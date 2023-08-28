import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders', () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    const element = screen.getByRole('heading', { level: 1 });
    expect(element).toHaveTextContent('Vite + React');
  });
});
