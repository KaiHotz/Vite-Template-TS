import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders', () => {
    render(<App />);

    const element = screen.getByRole('heading', { level: 1 });

    expect(element).toHaveTextContent('Vite + React');
  });
});
