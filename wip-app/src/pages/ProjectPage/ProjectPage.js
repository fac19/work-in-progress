import React from "react";
import { getProjectPage } from "../../utils/get-fetch";

const ProjectPage = () => {
  const [projectData, setProjectData] = React.useState([]);
  const [stepId, setStepId] = React.useState(null);
  const [feedbackObject, setFeedbackObject] = React.useState([]);

  const projectId = 3;

  React.useEffect(() => {
    getProjectPage(projectId).then((projectData) => {
      setProjectData(projectData);
      console.log(projectData);
      setStepId(projectData.id);
    });
  }, []);

  // React.useEffect(() => {
  //   getFeedback().then(setFeedbackObject)
  // }, [stepId])

  const {
    id,
    username,
    step_link,
    step_name,
    project_name,
    project_description,
    project_status,
  } = projectData;

  return (
    <section>
      <h2>{project_name}</h2>
      <h3>By {username}</h3>
      <p>Project status: {project_status ? "Finished" : "In Progress"}</p>
      <p>{project_description}</p>
      <h2>Project Steps</h2>
      <article>
        <h3>{step_name}</h3>
        <img src={step_link} alt="" />
      </article>
    </section>
  );
};

export default ProjectPage;
