import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomDropdown.module.css';
const CustomDropdown = ({ label, options, selected, setSelected }) => {
  return (
    <div className={styles.container}>
      <span data-testid="label" className={styles.label}>
        {label}
      </span>
      <select
        data-testid="selected"
        className={styles.select}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((val, index) => {
          return (
            <option value={val} key={index}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
};
CustomDropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  setSelected: PropTypes.func
};
export default CustomDropdown;
