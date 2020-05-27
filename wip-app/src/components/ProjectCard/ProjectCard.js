import React from "react";
import { ProjectCardArticle, ProjectCardImage } from "./ProjectCard.style";

const ProjectCard = ({ project_name, username, date, step_link }) => {
  return (
    <>
      <ProjectCardArticle>
        <h3>{project_name}</h3>
        <p>{username}</p>
        {/* {project_status ? <p>Work in progress</p> : <p>Finished</p>} */}
        <ProjectCardImage src={step_link} alt="catch em" />
      </ProjectCardArticle>
    </>
  );
};

export default ProjectCard;
