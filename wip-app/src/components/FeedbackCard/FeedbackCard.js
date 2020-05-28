import React from "react";
import {
  FeedbackText,
  FeedbackTag,
  Comment,
  FeedbackUser,
  Step,
  FeedbackForm,
  FeedbackInput,
  FeedbackButton,
  FeedbackArticle,
  FeedbackHeader,
  FeedbackList,
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
            <FeedbackHeader>
              <FeedbackUser>{feedback.step_name}</FeedbackUser>
              <FeedbackText>{feedback.step_description}</FeedbackText>
            </FeedbackHeader>
            <StepCardImage src={feedback.step_link} alt="" />
          </Step>
          <FeedbackForm>
            <label htmlFor="feedback"></label>
            <FeedbackInput
              name="feedback"
              id="tag"
              type="text"
              placeholder="Feedback..."
            ></FeedbackInput>
            <FeedbackButton type="submit">+</FeedbackButton>
          </FeedbackForm>
          <Comment>
            <FeedbackList>
              <FeedbackUser> {feedback.username}</FeedbackUser>
              <FeedbackTag> {feedback.feedback_tag}</FeedbackTag>
            </FeedbackList>
            <FeedbackText>{feedback.feedback_text} </FeedbackText>
          </Comment>
        </>
      );
    });
  };
  return <FeedbackArticle>{feedbackMap()}</FeedbackArticle>;
};

export default FeedbackCard;
