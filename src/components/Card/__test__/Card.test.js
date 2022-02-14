import { render } from '@testing-library/react';
import Card from '../Card';
import '@testing-library/jest-dom/extend-expect';

test('Component should render correctly', () => {
  const { getByTestId } = render(<Card header="Test header" snippet="Test snippet" />);
  const headerEl = getByTestId('header');
  const snippetEl = getByTestId('snippet');

  expect(headerEl.textContent).toBe('Test header');
  expect(snippetEl.textContent).toBe('Test snippet');
});
