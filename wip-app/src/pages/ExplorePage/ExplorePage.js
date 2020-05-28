import React, { useEffect } from "react";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";
import { explorePage } from "../../utils/get-fetch";

const ExplorePage = (props) => {
  const [projects, setProjects] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(false);

  useEffect(() => {
    explorePage().then((projects) => {
      setProjects(projects);
      if (projects.length === 0) {
        setIsEmpty(true);
      }
    });
  }, []);

  const isLoading = !projects;

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isEmpty) {
    return <h2>No new projects - you're following them all!</h2>;
  } else {
    return (
      <>
        <h1>Find new projects to follow</h1>
        <ProjectFeed projects={projects}></ProjectFeed>
      </>
    );
  }
};

export default ExplorePage;
