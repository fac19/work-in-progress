import React from "react";
import { ProjectCardArticle, ProjectCardImage } from "./ProjectCard.style";
import { useHistory } from "react-router-dom";

const ProjectCard = ({
  project_name,
  username,
  date,
  step_link,
  project_id,
}) => {
  const history = useHistory();

  function handleProjectClick(event) {
    history.push(`/project/${project_id}`);
  }

  return (
    <ProjectCardArticle onClick={handleProjectClick}>
      <h3>{project_name}</h3>
      <p>{username}</p>
      {/* {project_status ? <p>Work in progress</p> : <p>Finished</p>} */}
      <ProjectCardImage
        src={step_link}
        alt={`${username}'s project: ${project_name}`}
      />
    </ProjectCardArticle>
  );
};

export default ProjectCard;
