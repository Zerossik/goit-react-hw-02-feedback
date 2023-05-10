const FeedBack = ({
  hendleClick,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={evt => hendleClick('good')}>
        Good
      </button>
      <button type="button" onClick={evt => hendleClick('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={evt => hendleClick('bad')}>
        Bad
      </button>
      <div>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total()}</p>
        <p>Positive feedback: {good ? Math.round(positivePercentage()) : 0}%</p>
      </div>
    </div>
  );
};

export default FeedBack;
