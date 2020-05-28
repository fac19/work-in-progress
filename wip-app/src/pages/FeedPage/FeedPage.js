import React, { useEffect } from "react";
import { feedPage } from "../../utils/get-fetch";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";

const FeedPage = (props) => {
  const [projects, setProjects] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(false);

  useEffect(() => {
    feedPage().then((projects) => {
      setProjects(projects);
      if (projects.length === 0) {
        setIsEmpty(true);
      }
    });
  }, []);

  const isLoading = !projects;

  if (isLoading) {
    return <h2>Loading your feed...</h2>;
  } else if (isEmpty) {
    return (
      <h2>You don't follow any projects yet...check them out in Explore!</h2>
    );
  } else {
    return <ProjectFeed projects={projects}></ProjectFeed>;
  }
};

export default FeedPage;
