import { render } from '@testing-library/react';
import Info from '../Info';
import '@testing-library/jest-dom/extend-expect';

test('Should have the test content rendered to it', () => {
  const { getByTestId } = render(<Info message="Testing component" />);
  const alertEl = getByTestId('alert');

  expect(alertEl.textContent).toBe('Testing component');
});
