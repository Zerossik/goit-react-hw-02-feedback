import { Component } from 'react';
import FeedBack from './Feedback/FeedBack';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  hendleClick = value => {
    this.setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      ...prevState,
      total: prevState.good + prevState.neutral + prevState.bad,
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
      />
    );
  }
}
