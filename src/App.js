import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplates } from './store/asyncActions/getTemplates';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import styles from './App.module.css';
import arrow from './assets/arrow.svg';
import Info from './components/Info/Info';
import { filterItem } from './utils/filterItems';

const App = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [listToShow, setListToShow] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const itemPerPage = 15;
  const dispatch = useDispatch();
  const { templateList, filters, isLoading } = useSelector((state) => state.template);
  useEffect(() => {
    dispatch(getTemplates());
    setCurrentPage(1);
  }, []);
  useEffect(() => {
    let filterResult = filterItem(templateList, filters);
    setFilteredList(filterResult);
    setCurrentPage(1);
  }, [filters, templateList]);
  useEffect(() => {
    let copyFilteredList = [...filteredList];
    setListToShow(copyFilteredList.splice((currentPage - 1) * itemPerPage, itemPerPage));
  }, [currentPage, filteredList]);

  return (
    <div className={styles.container}>
      <Navbar />
      <Info message="Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates" />
      <div className={styles.subNav}>
        <p>{filters.categoryFilter} Templates</p> <p>{filteredList.length} Templates</p>
      </div>
      <div className={styles.itemContainer}>
        {!isLoading && listToShow ? (
          listToShow.map((val, index) => {
            return <Card header={val.name} snippet={val.description} link={val.link} key={index} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
        {!isLoading && listToShow.length === 0 && <h2>No result</h2>}
      </div>
      <div className={styles.pagination}>
        {currentPage !== 1 ? (
          <button
            className={styles.prevBtn}
            onClick={() => {
              if (currentPage - 1 >= 1) {
                setCurrentPage(currentPage - 1);
              }
            }}>
            <img src={arrow} alt=">" />
            Previous
          </button>
        ) : (
          <button className={styles.prevBtn}>Previous</button>
        )}
        <div className={styles.pageNumber}>
          <div>{currentPage}</div>
          <div>of</div>
          <div>{Math.ceil(filteredList.length / 15) ? Math.ceil(filteredList.length / 15) : 1}</div>
        </div>
        <button
          className={styles.nextBtn}
          onClick={() => {
            if (currentPage + 1 <= Math.ceil(filteredList.length / 15)) {
              setCurrentPage(currentPage + 1);
            }
          }}>
          Next <img src={arrow} alt=">" />
        </button>
      </div>
    </div>
  );
};

export default App;
