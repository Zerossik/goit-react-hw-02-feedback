import { FeedbackSection, FeedbackSectionTitle } from './Section.styled';
export function Section({ title, children }) {
  return (
    <FeedbackSection>
      <FeedbackSectionTitle>{title}</FeedbackSectionTitle>
      {children.map(el => el)}
    </FeedbackSection>
  );
}
