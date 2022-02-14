import React from 'react';
import searchIcon from '../../assets/search.svg';
import style from './SearchInput.module.css';
import PropTypes from 'prop-types';

const SearchInput = ({ placeholder, defaultValue, setValue, handleSearch }) => {
  const inputHandler = (e) => {
    setValue(e);
  };
  return (
    <div className={style.container}>
      <input
        type="text"
        value={defaultValue}
        placeholder={placeholder}
        data-testid="input"
        onChange={inputHandler}
        className={style.input}
        onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button className={style.searchButton} onClick={handleSearch}>
        <img src={searchIcon} alt="search" className={style.icon} />
      </button>
    </div>
  );
};
SearchInput.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  setValue: PropTypes.func,
  handleSearch: PropTypes.func
};
export default SearchInput;
