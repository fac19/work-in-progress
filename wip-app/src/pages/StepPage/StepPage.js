import React from "react";
import { getFeedback } from "../../utils/get-fetch";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
// import StepCard from "../../components/StepCard/StepCard";

const StepPage = () => {
  const [feedback, setFeedback] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(false);

  const stepId = window.location.pathname.replace("/step/", "");

  React.useEffect(() => {});

  React.useEffect(() => {
    getFeedback(stepId).then((feedbackObj) => {
      setFeedback(feedbackObj);
      if (feedbackObj.length === 0) {
        setIsEmpty(true);
      }
    });
  }, [stepId]);

  const isLoading = !feedback;

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isEmpty) {
    return <h2>No feedback yet, add some!</h2>;
  } else {
    return (
      <section>
        <FeedbackCard feedback={feedback} />
      </section>
    );
  }
};

export default StepPage;
