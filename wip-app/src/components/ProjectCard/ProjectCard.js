import React from "react";
import { ProjectCardArticle, ProjectCardImage } from "./ProjectCard.style";

const ProjectCard = ({ project_name, project_status }) => {
  return (
    <>
      <ProjectCardArticle>
        <p>{project_name}</p>
        {project_status ? <p>Work in progress</p> : <p>Finished</p>}
        <ProjectCardImage
          src="https://i.imgur.com/RUpiPpd.jpg"
          alt="catch em"
        />
      </ProjectCardArticle>
    </>
  );
};

export default ProjectCard;
