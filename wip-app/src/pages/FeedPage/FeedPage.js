import React, { useEffect } from "react";
import { feedPage } from "../../utils/get-fetch";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";
import { PageHeading } from "../page.style";

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
    return <PageHeading>Loading your feed...</PageHeading>;
  } else if (isEmpty) {
    return (
      <PageHeading>
        You don't follow any projects yet...check them out in Explore!
      </PageHeading>
    );
  } else {
    return <ProjectFeed projects={projects}></ProjectFeed>;
  }
};

export default FeedPage;
