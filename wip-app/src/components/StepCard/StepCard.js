import React from "react";
import { StepCardArticle, StepCardImage } from "./StepCard.style";

const StepCard = ({ step_name, step_description, step_link }) => {
  return (
    <StepCardArticle>
      <h3>{step_name}</h3>
      <p>{step_description}</p>
      <StepCardImage src={step_link} alt="" />
    </StepCardArticle>
  );
};

export default StepCard;
