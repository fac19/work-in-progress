import React from "react";
import { getUser, getUserPageProjects } from "../../utils/get-fetch";
import { ProfileCard } from "./UserPage.style";
import ProjectFeed from "../../components/ProjectFeed/ProjectFeed";

const UserPage = (props) => {
  const [userInfo, setUserInfo] = React.useState([]);
  const [userProjects, setUserProjects] = React.useState([]);

  React.useEffect(() => {
    getUser().then((userInfo) => {
      setUserInfo(userInfo);
    });
  }, []);

  React.useEffect(() => {
    getUserPageProjects().then((userProjects) => {
      setUserProjects(userProjects);
    });
  }, []);

  const {
    username,
    email,
    user_bio,
    user_vocation,
    user_link_1,
    user_link_2,
    user_link_3,
  } = userInfo;

  console.log("userlink", user_link_1);

  return (
    <>
      {userInfo === [] || userProjects === [] ? (
        <h1>Loading...</h1>
      ) : (
        // this is not rendering
        <>
          <ProfileCard>
            <h1>{username}'s Profile</h1>
            <p>{email}</p>
            <a
              href={"https://" + user_link_1}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 1
            </a>
            <a
              href={"https://" + user_link_2}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 2
            </a>
            <a
              href={"https://" + user_link_3}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 3
            </a>
            <p>{user_bio}</p>
            <p>{user_vocation}</p>
          </ProfileCard>
          <ProjectFeed projects={userProjects} />
        </>
      )}
    </>
  );
};

export default UserPage;
