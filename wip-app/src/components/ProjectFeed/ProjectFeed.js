import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectGrid } from "./ProjectFeed.style";

const ProjectFeed = ({ projects }) => {
  const renderProjects = (projects) => {
    return projects.map(({ project_name, project_status, id }) => {
      return (
        <ProjectCard
          project_name={project_name}
          project_status={project_status}
          key={id}
        />
      );
    });
  };

  return (
    <>
      <ProjectGrid>{renderProjects(projects)}</ProjectGrid>
    </>
  );
};

export default ProjectFeed;
