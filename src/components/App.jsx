import { Component } from 'react';
import FeedBack from './Feedback/FeedBack';

export class App extends Component {
  totalFeedback = 0;
  positivePercentageFeedback = 0;
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      this.totalFeedback = prevState.good + prevState.neutral + prevState.bad;
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      this.positivePercentageFeedback =
        (prevState.good / this.totalFeedback) * 100;
    });
  };

  hendleClick = value => {
    this.setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedBack
        hendleClick={this.hendleClick}
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.totalFeedback}
        positivePercentage={this.positivePercentageFeedback}
      />
    );
  }
}
