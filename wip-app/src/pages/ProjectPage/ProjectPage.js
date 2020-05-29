import React from "react";
import { getProjectPage, getSteps } from "../../utils/get-fetch";
import StepCard from "../../components/StepCard/StepCard";
import { PageHeading } from "../page.style";

const ProjectPage = () => {
  const [projectData, setProjectData] = React.useState([]);
  const [stepsObject, setStepsObject] = React.useState([]);
  // const [feedbackObject, setFeedbackObject] = React.useState([]);

  const projectId = window.location.pathname.replace("/project/", "");

  React.useEffect(() => {
    getProjectPage(projectId).then(setProjectData);
  }, [projectId]);

  React.useEffect(() => {
    getSteps(projectId).then((steps) => {
      setStepsObject(steps);
    });
  }, [projectId]);

  const {
    username,
    project_name,
    project_description,
    project_status,
  } = projectData;

  const makeStepCards = (stepsObject) => {
    return stepsObject
      .map((step) => {
        return <StepCard key={step.id} {...step} />;
      })
      .reverse();
  };

  return (
    <>
      <section>
        <PageHeading>{project_name}</PageHeading>
        <h3>By {username}</h3>
        <p>Project status: {project_status ? "Finished" : "In Progress"}</p>
        <p>{project_description}</p>
      </section>
      <section>
        <h2>Project Steps</h2>
        {/* <a href="">Add a new step</a> */}
        {makeStepCards(stepsObject)}
      </section>
    </>
  );
};

export default ProjectPage;
