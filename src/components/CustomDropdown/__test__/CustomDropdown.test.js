import { render, fireEvent } from '@testing-library/react';
import CustomDropdown from '../CustomDropdown';
import '@testing-library/jest-dom/extend-expect';

test('Renders correctly', () => {
  const options = ['1', '2', '3', '4'];
  let selected = '1';
  const setSelected = (val) => {
    selected = val;
  };
  const { getByTestId } = render(
    <CustomDropdown
      selected={selected}
      options={options}
      label="testing"
      setSelected={setSelected}
    />
  );
  const selectedEl = getByTestId('selected');
  const label = getByTestId('label');
  fireEvent.click(selectedEl);
  fireEvent.change(selectedEl, {
    target: {
      value: '2'
    }
  });

  expect(selected).toBe('2');
  expect(label.textContent).toBe('testing');
});
