import React from "react";
import { FeedbackText, FeedbackTag } from "./FeedbackCard.style";

const FeedbackCard = ({ feedback_text, feedback_tag }) => {
  // <p>Posted by: </p>
  return (
    <article>
      <FeedbackText>Comment: {feedback_text}</FeedbackText>
      <FeedbackTag>Tag: {feedback_tag}</FeedbackTag>
    </article>
  );
};

export default FeedbackCard;
