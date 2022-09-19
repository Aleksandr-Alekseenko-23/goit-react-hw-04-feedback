import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  reviewGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  reviewNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  reviewBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return +((good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          onReviewGood={this.reviewGood}
          onreviewNeutral={this.reviewNeutral}
          onreviewBad={this.reviewBad}
        />
        <Section title="Statistics" />
        {totalFeedback > 0 ? (
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotal={this.countTotalFeedback()}
            onPositivFeedback={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
