import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ward', () => {
  render(<App />);
  const linkElement = screen.getByText(/ward/i);
  expect(linkElement).toBeInTheDocument();
});
