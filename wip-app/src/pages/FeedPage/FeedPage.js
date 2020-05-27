import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { feedPage } from "../../utils/get-fetch";
import { ProjectGrid } from "./FeedPage.style";

const FeedPage = (props) => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    feedPage().then(setProjects);
  }, []);

  const renderProjects = (projects) => {
    return projects.map(
      ({ id, user_id, project_name, project_description, project_status }) => {
        return (
          <ProjectCard
            project_name={project_name}
            project_status={project_status}
            key={id}
          />
        );
      }
    );
  };

  return (
    <>
      <h1>Feed Page</h1>
      {projects === [] ? (
        <h2>Loading...</h2>
      ) : (
        <ProjectGrid>{renderProjects(projects)}</ProjectGrid>
      )}
    </>
  );
};

export default FeedPage;
