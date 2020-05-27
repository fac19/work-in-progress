import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { explorePage } from "../../utils/get-fetch";
import { ProjectGrid } from "../FeedPage/FeedPage.style";

const ExplorePage = (props) => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    explorePage().then(setProjects);
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
      <h1>Explore Page</h1>
      {projects === [] ? (
        <h2>Loading...</h2>
      ) : (
        <ProjectGrid>{renderProjects(projects)}</ProjectGrid>
      )}
    </>
  );
};

export default ExplorePage;
