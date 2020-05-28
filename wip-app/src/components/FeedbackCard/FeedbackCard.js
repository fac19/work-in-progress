import React from "react";
import {
  FeedbackText,
  FeedbackTag,
  Comment,
  FeedbackUser,
  Step,
  FeedbackForm,
} from "./FeedbackCard.style";
import { StepCardImage } from "../../components/StepCard/StepCard.style";

const FeedbackCard = ({ feedback }) => {
  // <p>Posted by: </p>
  const feedbackMap = () => {
    console.log(feedback);
    return feedback.map((feedback) => {
      return (
        <>
          <Step>
            <FeedbackUser>{feedback.step_name}</FeedbackUser>
            <FeedbackText>{feedback.step_description}</FeedbackText>
            <StepCardImage src={feedback.step_link} alt="" />
          </Step>
          <FeedbackForm>
            <label htmlFor="feedback"></label>
            <input
              name="feedback"
              id="tag"
              type="text"
              placeholder="Feedback..."
            ></input>
            <button type="submit">Add</button>
          </FeedbackForm>
          <Comment>
            <FeedbackUser> {feedback.username}</FeedbackUser>
            <FeedbackText>{feedback.feedback_text} </FeedbackText>
            <FeedbackTag> {feedback.feedback_tag}</FeedbackTag>
          </Comment>
        </>
      );
    });
  };
  return <article>{feedbackMap()}</article>;
};

export default FeedbackCard;
