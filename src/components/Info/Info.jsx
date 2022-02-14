import React from 'react';
import PropTypes from 'prop-types';
import infoIcon from '../../assets/info.svg';
import styles from './Info.module.css';
const Info = ({ message }) => {
  return (
    <div className={styles.container}>
      <img src={infoIcon} alt="" />
      <span data-testid="alert">{message}</span>
    </div>
  );
};
Info.propTypes = {
  message: PropTypes.string
};
export default Info;
