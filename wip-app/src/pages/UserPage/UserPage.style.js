import styled from "styled-components";

const ProfileCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const ProfileName = styled.h1`
  margin-bottom: 1em;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.7);
`;

const ProfileEmail = styled.p`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.6);
`;
const ProfileBio = styled.p`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.6);
`;
const ProfileVocation = styled.p`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.6);
`;
const ProfileATag = styled.a`
  margin: 0;
`;
const ProfileLink = styled.img`
  width: 2em;
`;
const ProfileLinksSection = styled.section`
  display: flex;
  flex-direction: rows;
  width: 2em;
  justify-content: center;
`;

export {
  ProfileCard,
  ProfileName,
  ProfileEmail,
  ProfileBio,
  ProfileVocation,
  ProfileATag,
  ProfileLink,
  ProfileLinksSection,
};
