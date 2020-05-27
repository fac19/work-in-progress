import React from "react";
import { ProjectCardArticle, ProjectCardImage } from "./ProjectCard.style";
import { Link } from "react-router-dom";

const ProjectCard = ({ project_name, username, date, step_link }) => {
  const project_url = "/profile";
  return (
    <>
      <ProjectCardArticle>
        <h3>{project_name}</h3>
        <Link to={project_url}>Feed</Link>
        <p>{username}</p>
        {/* {project_status ? <p>Work in progress</p> : <p>Finished</p>} */}
        <ProjectCardImage src={step_link} alt="catch em" />
      </ProjectCardArticle>
    </>
  );
};

export default ProjectCard;
