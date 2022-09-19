import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviewGood = () => {
    setGood(prevState => prevState + 1);
  };

  const reviewNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const reviewBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    return +((good / countTotalFeedback()) * 100).toFixed();
  };
  const totalFeedback = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        onReviewGood={reviewGood}
        onreviewNeutral={reviewNeutral}
        onreviewBad={reviewBad}
      />
      <Section title="Statistics" />
      {totalFeedback > 0 ? (
        <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          onTotal={countTotalFeedback()}
          onPositivFeedback={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
