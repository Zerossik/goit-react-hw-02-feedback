import { Component } from 'react';
import FeedBack from './Feedback/FeedBack';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good / (good + neutral + bad)) * 100;
  };

  hendleClick = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedBack
        hendleClick={this.hendleClick}
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback}
        positivePercentage={this.countPositiveFeedbackPercentage}
      />
    );
  }
}
