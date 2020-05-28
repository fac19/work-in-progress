import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectGrid } from "./ProjectFeed.style";

const ProjectFeed = ({ projects }) => {
  const uniqueProjects = [projects.length === 0 ? {} : projects[0]];

  for (let i = 1; i < projects.length; i++) {
    for (let j = 0; j < uniqueProjects.length; j++) {
      if (
        uniqueProjects.every((uniqueObj) => uniqueObj.id !== projects[i].id)
      ) {
        uniqueProjects.push(projects[i]);
      }
    }
  }

  const renderProjects = (projects) => {
    return uniqueProjects.map(
      ({ username, project_name, date, step_link, id }) => {
        return (
          <ProjectCard
            project_name={project_name}
            username={username}
            date={date}
            step_link={step_link}
            key={id}
          />
        );
      }
    );
  };

  return (
    <>
      <ProjectGrid>{renderProjects(projects)}</ProjectGrid>
    </>
  );
};

export default ProjectFeed;
