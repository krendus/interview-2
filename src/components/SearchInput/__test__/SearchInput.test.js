import { render } from '@testing-library/react';
import SearchInput from '../SearchInput';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;
beforeEach(() => {
  const component = render(<SearchInput placeholder={'Search Templates'} defaultValue={'test'} />);
  getByTestId = component.getByTestId;
});

test('Renders with correct placeholder', () => {
  const InputEl = getByTestId('input');
  expect(InputEl.placeholder).toBe('Search Templates');
});
test('The input has the value passed to it', () => {
  const InputEl = getByTestId('input');
  expect(InputEl.value).toBe('test');
});
