import styled from "styled-components";

const ProjectCardArticle = styled.article`
  margin: 1em 0;
  padding: 3em;
  border-radius: 3em;
  text-align: center;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 1em 2em 0 rgba(0, 0, 0, 0.3);
  }
`;

const ProjectCardTitle = styled.h3`
  margin-bottom: 0.5em;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.7);
`;
const ProjectCardImage = styled.img`
  width: 100%;
  border-radius: 4em;
`;

const ProjectCardUsername = styled.p`
  margin: 0;
  float: left;
  font-size: 1em;
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);
`;

export {
  ProjectCardArticle,
  ProjectCardTitle,
  ProjectCardImage,
  ProjectCardUsername,
};
