import React, { useEffect } from "react";
import { feedPage } from "../../utils/get-fetch";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";

const FeedPage = (props) => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    feedPage().then(setProjects);
  }, []);

  return (
    <>
      <h1>Feed Page</h1>
      {projects.length === 0 ? (
        <h2>Loading your feed...</h2>
      ) : (
        <ProjectFeed projects={projects} />
      )}
    </>
  );
};

export default FeedPage;
