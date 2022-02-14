import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import styles from './Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../store/slice/templateSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const categoryOptions = ['All', 'Education', 'E-commerce', 'Health'];
  const dateOptions = ['Default', 'Ascending', 'Descending'];
  const orderOptions = ['Default', 'Ascending', 'Descending'];
  const { categoryFilter, dateFilter, orderFilter } = useSelector(
    (state) => state.template.filters
  );
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(categoryFilter);
  const [date, setDate] = useState(dateFilter);
  const [order, setOrder] = useState(orderFilter);

  const handleCategoryChange = (val) => {
    dispatch(
      updateFilter({
        key: 'dateFilter',
        value: 'Default'
      })
    );
    dispatch(
      updateFilter({
        key: 'orderFilter',
        value: 'Default'
      })
    );
    dispatch(
      updateFilter({
        key: 'categoryFilter',
        value: val
      })
    );
    dispatch(
      updateFilter({
        key: 'searchFilter',
        value: ''
      })
    );
    setDate(dateOptions[0]);
    setOrder(orderOptions[0]);
    setCategory(val);
    setSearch('');
  };
  const handleDateChange = (val) => {
    dispatch(
      updateFilter({
        key: 'dateFilter',
        value: val
      })
    );
    dispatch(
      updateFilter({
        key: 'orderFilter',
        value: 'Default'
      })
    );
    setOrder(orderOptions[0]);
    setDate(val);
  };
  const handleOrderChange = (val) => {
    dispatch(
      updateFilter({
        key: 'orderFilter',
        value: val
      })
    );
    dispatch(
      updateFilter({
        key: 'dateFilter',
        value: 'Default'
      })
    );
    setDate(dateOptions[0]);
    setOrder(val);
  };
  const handleSearch = () => {
    dispatch(
      updateFilter({
        key: 'searchFilter',
        value: search
      })
    );
  };
  return (
    <div className={styles.container}>
      <div>
        <SearchInput
          placeholder={`Search Templates`}
          defaultValue={search}
          setValue={(e) => setSearch(e.target.value)}
          handleSearch={handleSearch}
        />
      </div>
      <div className={styles.optionContainer}>
        <CustomDropdown
          options={categoryOptions}
          label="Category"
          selected={category}
          setSelected={handleCategoryChange}
        />
        <CustomDropdown
          options={orderOptions}
          label="Order"
          selected={order}
          setSelected={handleOrderChange}
        />
        <CustomDropdown
          options={dateOptions}
          label="Date"
          selected={date}
          setSelected={handleDateChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
