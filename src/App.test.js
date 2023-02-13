import { render, screen } from '@testing-library/react';
import App from './App';

test('retrieves all cells described by name', () => {
  render(<App />);
  const cells = screen.getAllByRole('cell', {description: /name/i});
  const cellValues = cells.map(cell => cell.textContent);
  expect(cellValues).toContain('J Doe');
});