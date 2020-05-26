import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { feedPage } from "../../utils/get-fetch";

const FeedPage = (props) => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    feedPage().then(setProjects);
  }, []);

  return (
    <div>
      <h1>Feed Page</h1>
      {projects === [] ? (
        <h2>Loading...</h2>
      ) : (
        projects.map((project) => {
          return <ProjectCard props={project} key={project.id} />;
        })
      )}
    </div>
  );
};

export default FeedPage;
