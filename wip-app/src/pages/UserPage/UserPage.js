import React from "react";
import { getUser } from "../../utils/get-fetch";

const UserPage = (props) => {
  const [userInfo, setUserInfo] = React.useState([]);

  React.useEffect(() => {
    getUser().then((userInfo) => {
      console.log(userInfo);
      setUserInfo(userInfo);
    });
  }, []);

  // const renderProjects = (projects) => {
  //   return projects.map(
  //     ({ id, user_id, project_name, project_description, project_status }) => {
  //       // console.log(project);
  //       return (
  //         <ProjectCard
  //           project_name={project_name}
  //           project_status={project_status}
  //           key={id}
  //         />
  //       );
  //     }
  //   );
  // };

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default UserPage;
