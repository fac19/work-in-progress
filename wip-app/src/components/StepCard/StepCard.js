import React from "react";
import { StepCardArticle, StepCardImage } from "./StepCard.style";
import { useHistory } from "react-router-dom";

const StepCard = ({ id, step_name, step_description, step_link }) => {
  const history = useHistory();
  const [stepData, setStepData] = React.useState(null);

  const goToStepPage = () => {
    history.push(`/step/${id}`);
  };

  return (
    <StepCardArticle onClick={goToStepPage}>
      <h3>{step_name}</h3>
      <p>{step_description}</p>
      <StepCardImage src={step_link} alt="" />
    </StepCardArticle>
  );
};

export default StepCard;
