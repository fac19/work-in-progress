import React, { useEffect } from "react";
import { feedPage } from "../../utils/get-fetch";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";

const FeedPage = (props) => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    const projectArray = [];
    feedPage().then((projectResponse) => {
      console.log(projectResponse);
      // projectResponse.reverse();
      // projectArray.push(projectResponse[0])
      let projectId = 1;
      for (let i = 0; i < projectResponse.length; i++) {
        if (projectResponse[i].id === projectId) {
          projectArray.push(projectResponse[i]);
          projectId++;
        }
        // for (let j = 0; j < projectArray.length; j++) {
        //   if (projectResponse[i].id != projectArray[j].id){
        //     projectArray.push(projectResponse[i]);
        //   }
        // }
      }
      console.log(projectArray);
      setProjects(projectArray);
    });
    // new Date(Math.max.apply(null, a.map(function(e) {
    //   return new Date(e.MeasureDate);
    // })));
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
