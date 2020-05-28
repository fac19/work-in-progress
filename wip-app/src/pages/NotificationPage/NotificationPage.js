import React from "react";
import {
  NotificationArticle,
  NotificationTitle,
  NotificationImg,
} from "./NotificationPage.style";

const NotificationPage = (props) => {
  return (
    <NotificationArticle>
      <NotificationImg
        alt="coming soon"
        src="coming-soon.svg"
      ></NotificationImg>
      <NotificationTitle>Coming Soon(ish)....</NotificationTitle>
    </NotificationArticle>
  );
};

export default NotificationPage;
