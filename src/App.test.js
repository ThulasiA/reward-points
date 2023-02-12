import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reward Points/i);
  expect(linkElement).toBeInTheDocument();
});
