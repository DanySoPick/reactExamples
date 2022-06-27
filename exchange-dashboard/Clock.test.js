import { render, screen } from '@testing-library/react';
import Clock from './Clock';

test('test current date', () => {
  render(<Clock />);
  const now = new Date().toLocaleString('sv-SE');
  const linkElement = screen.getByText(now);
  expect(linkElement).toBeInTheDocument();
});

//npm run test
