import { render, screen } from '@testing-library/react';
import App from 'components/App';

test('renders app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Posts List/i);
  expect(linkElement).toBeInTheDocument();
});
