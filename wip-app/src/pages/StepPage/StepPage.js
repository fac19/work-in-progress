import React from "react";
import { getFeedback } from "../../utils/get-fetch";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";

const StepPage = () => {
  const [feedback, setFeedback] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [feedbackUser, setFeedbackUser] = React.useState("");

  const stepId = window.location.pathname.replace("/step/", "");

  React.useEffect(() => {});

  React.useEffect(() => {
    getFeedback(stepId).then((feedback) => {
      setFeedback(feedback);
      if (feedback.length === 0) {
        setIsEmpty(true);
      }
    });
  }, []);

  const isLoading = !feedback;

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isEmpty) {
    return <h2>No feedback yet, add some!</h2>;
  } else {
    return <FeedbackCard feedback={feedback} />;
  }
};

export default StepPage;
