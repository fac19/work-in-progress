import styled from "styled-components";

const NotificationArticle = styled.article`
  margin: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotificationTitle = styled.h3`
  margin: 1em;
  color: grey;
`;

const NotificationImg = styled.img`
  width: 70%;
  height: 100%;
`;

export { NotificationArticle, NotificationTitle, NotificationImg };
