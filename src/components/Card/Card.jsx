import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = ({ header, snippet, link }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 data-testid="header">{header}</h2>
        <p data-testid="snippet">{snippet} ...</p>
      </div>
      <div>
        <a href={link}>Use Template</a>
      </div>
    </div>
  );
};
Card.propTypes = {
  header: PropTypes.string,
  snippet: PropTypes.string,
  link: PropTypes.string
};

export default Card;
