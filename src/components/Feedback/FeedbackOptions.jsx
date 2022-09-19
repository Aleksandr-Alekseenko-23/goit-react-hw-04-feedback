import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onReviewGood, onreviewNeutral, onreviewBad }) => {
  return (
    <div className={css.listButton}>
      <button className={css.button} type="button" onClick={onReviewGood}>
        good
      </button>
      <button className={css.button} type="button" onClick={onreviewNeutral}>
        neutral
      </button>
      <button className={css.button} type="button" onClick={onreviewBad}>
        bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onReviewGood: PropTypes.func.isRequired,
  onreviewNeutral: PropTypes.func.isRequired,
  onreviewBad: PropTypes.func.isRequired,
};
