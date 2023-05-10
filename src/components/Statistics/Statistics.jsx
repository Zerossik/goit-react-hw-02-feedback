import { Notification } from './Notification';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const totalFeedback = total();
  return (
    <div>
      <h3>Statistics</h3>
      {totalFeedback ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>
            Positive feedback: {good ? Math.round(positivePercentage()) : 0}%
          </p>
        </>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}
