import { FeedbackButton } from './FeedbackOptions.styled';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(el => {
    return (
      <FeedbackButton
        type="button"
        key={el}
        onClick={() => onLeaveFeedback(el)}
      >
        {el}
      </FeedbackButton>
    );
  });
}
