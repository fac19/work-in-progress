import React, { useEffect } from "react";
import { feedPage } from "../../utils/get-fetch";
// import { ProjectGrid } from "./FeedPage.style";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";

const FeedPage = (props) => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    feedPage().then(setProjects);
  }, []);

  return (
    <>
      <h1>Feed Page</h1>
      {projects === [] ? (
        <h2>Loading...</h2>
      ) : (
        <ProjectFeed projects={projects} />
      )}
    </>
  );
};

export default FeedPage;
