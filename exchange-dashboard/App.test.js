import { render, screen } from '@testing-library/react';
import App from './App';

test('guarantee title on page', () => {
  render(<App />);
  const linkElement = screen.getByText(/exchange-dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
