import React, { useEffect } from "react";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";
import { explorePage } from "../../utils/get-fetch";

const ExplorePage = (props) => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    explorePage().then(setProjects);
  }, []);

  return (
    <>
      <h1>Explore Page</h1>
      {projects === [] ? (
        <h2>Loading...</h2>
      ) : (
        <ProjectFeed projects={projects}></ProjectFeed>
      )}
    </>
  );
};

export default ExplorePage;
