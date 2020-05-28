import React from "react";
import { getFeedback } from "../../utils/get-fetch";

const StepPage = () => {
  const [feedback, setFeedback] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(false);

  const stepId = window.location.pathname.replace("/step/", "");

  React.useEffect(() => {
    getFeedback(stepId).then((feedback) => {
      setFeedback(feedback);
      if (feedback.length === 0) {
        setIsEmpty(true);
      }
    });
  }, []);

  return <h1>Step Page</h1>;
};

export default StepPage;
