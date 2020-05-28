import React from "react";
import { getUser, getUserPageProjects } from "../../utils/get-fetch";
import {
  ProfileCard,
  ProfileName,
  ProfileEmail,
  ProfileBio,
  ProfileVocation,
  ProfileATag,
  ProfileLink,
  ProfileLinksSection,
} from "./UserPage.style";
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
      setUserProjects(userProjects.reverse());
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

  const isLoading = userInfo.length === 0 || userProjects.length === 0;

  if (isLoading) {
    return <h1>Loading your profile...</h1>;
  } else {
    return (
      <>
        <ProfileCard>
          <ProfileName>{username}'s Profile</ProfileName>
          <ProfileVocation>{user_vocation}</ProfileVocation>
          <ProfileEmail>{email}</ProfileEmail>
          <ProfileLinksSection>
            <ProfileATag
              href={"https://" + user_link_1}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProfileLink src="link.svg" alt="link icon"></ProfileLink>
            </ProfileATag>
            <ProfileATag
              href={"https://" + user_link_2}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProfileLink src="link.svg" alt="link icon"></ProfileLink>
            </ProfileATag>
            <ProfileATag
              href={"https://" + user_link_3}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProfileLink src="link.svg" alt="link icon"></ProfileLink>
            </ProfileATag>
          </ProfileLinksSection>
          <ProfileBio>{user_bio}</ProfileBio>
        </ProfileCard>
        <ProjectFeed projects={userProjects} />
      </>
    );
  }
};

export default UserPage;
