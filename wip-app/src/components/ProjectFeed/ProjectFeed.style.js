import styled from "styled-components";

const ProjectGrid = styled.section`
  margin: 0 5%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(15em, 30em));
  grid-gap: 32px;
`;

export { ProjectGrid };
