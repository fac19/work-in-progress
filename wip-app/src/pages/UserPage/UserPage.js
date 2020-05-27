import React from "react";
import { getUser } from "../../utils/get-fetch";

const UserPage = (props) => {
  const [userInfo, setUserInfo] = React.useState([]);

  React.useEffect(() => {
    getUser().then((userInfo) => {
      setUserInfo(userInfo);
    });
  }, []);

  // email: "JO@123.com"
  // id: 2
  // user_bio: "I love colours they are so nice"
  // user_link_1: "www.facebook.com"
  // user_link_2: "www.instagram.com"
  // user_link_3: "www.twitter.com"
  // user_vocation: "professional animator"
  // username: "Jacko"

  const {
    username,
    email,
    user_bio,
    user_vocation,
    user_link_1,
    user_link_2,
    user_link_3,
  } = userInfo;

  return (
    <>
      {userInfo !== [] ? (
        <>
          <h1>{username}'s Profile</h1>
          <p>{email}</p>
          <a href={user_link_1}>Link 1</a>
          <a href={user_link_2}>Link 2</a>
          <a href={user_link_3}>Link 3</a>
          <p>{user_bio}</p>
          <p>{user_vocation}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default UserPage;
