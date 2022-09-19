import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onPositivFeedback,
}) => (
  <div className={css.wrapper}>
    <p className={css.text}>
      Good
      <span className={css.rezultGood}>{onGood}</span>
    </p>
    <p className={css.text}>
      Neutral
      <span className={css.rezultNeutral}>{onNeutral}</span>
    </p>
    <p className={css.text}>
      Bad
      <span className={css.rezultBad}>{onBad}</span>
    </p>
    <p className={css.text}>
      Total
      <span className={css.rezult}>{onTotal}</span>
    </p>
    <p className={css.text}>
      Positiv feedback
      <span className={css.rezult}>{onPositivFeedback}%</span>
    </p>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositivFeedback: PropTypes.number.isRequired,
};
