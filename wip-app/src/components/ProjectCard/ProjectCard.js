import React from "react";
import { useHistory } from "react-router-dom";
import {
  ProjectCardArticle,
  ProjectCardTitle,
  ProjectCardImage,
  ProjectCardUsername,
} from "./ProjectCard.style";

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
      <ProjectCardImage
        src={step_link}
        alt={`${username}'s project: ${project_name}`}
      />
      <ProjectCardTitle>{project_name}</ProjectCardTitle>
      <ProjectCardUsername>By {username}</ProjectCardUsername>
      {/* {project_status ? <p>Work in progress</p> : <p>Finished</p>} */}
    </ProjectCardArticle>
  );
};

export default ProjectCard;
