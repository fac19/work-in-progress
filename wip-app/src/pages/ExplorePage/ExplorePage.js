import React, { useEffect } from "react";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";
import { explorePage } from "../../utils/get-fetch";
import { PageHeading } from "../page.style";

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
    return <PageHeading>Loading...</PageHeading>;
  } else if (isEmpty) {
    return (
      <PageHeading>No new projects - you're following them all!</PageHeading>
    );
  } else {
    return (
      <>
        <PageHeading>Find new projects to follow</PageHeading>
        <ProjectFeed projects={projects}></ProjectFeed>
      </>
    );
  }
};

export default ExplorePage;
