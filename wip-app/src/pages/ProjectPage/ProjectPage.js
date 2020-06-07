import React from "react";
import { Button } from "@material-ui/core";

import { getProjectPage, getSteps } from "../../utils/get-fetch";
import StepCard from "../../components/StepCard/StepCard";
import { PageHeading } from "../page.style";
import AddNewStepForm from "../../components/AddNewStepForm/AddNewStepForm";

const ProjectPage = () => {
  const [projectData, setProjectData] = React.useState([]);
  const [stepsObject, setStepsObject] = React.useState([]);
  const [addingStep, setAddingStep] = React.useState(false);

  const projectId = window.location.pathname.replace("/project/", "");

  const handleClick = () => {
    setAddingStep(true);
  };

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

  const isLoading = projectData.length === 0;

  if (isLoading) {
    return <PageHeading>Loading project...</PageHeading>;
  } else if (!addingStep) {
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
          <Button variant="outlined" color="secondary" onClick={handleClick}>
            Add New Step
          </Button>
          {makeStepCards(stepsObject)}
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <PageHeading>{project_name}</PageHeading>
          <h3>By {username}</h3>
          <p>Project status: {project_status ? "Finished" : "In Progress"}</p>
          <p>{project_description}</p>
        </section>
        <AddNewStepForm projectId={projectId} />
      </>
    );
  }
};

export default ProjectPage;
