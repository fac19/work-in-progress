import React from "react";
import { projectPage } from "../../utils/get-fetch";

const ProjectPage = () => {
  const [projectData, setProjectData] = React.useState([]);

  React.useEffect(() => {
    projectPage().then(setProjectData);
  }, []);

  const {
    id,
    user_id,
    project_name,
    project_description,
    project_status,
  } = projectData;
  // SELECT (SELECT username FROM users WHERE projects.user_id=users.id), project_name, project_description, project_status, steps.step_name, steps.step_link, steps.date, feedback_text, feedback_tag, feedback.date
  // FROM projects JOIN users ON projects.user_id=users.id JOIN steps ON projects.id=steps.project_id JOIN feedback ON steps.id=feedback.step_id
  // WHERE projects.id = 1;
};

export default ProjectPage;
