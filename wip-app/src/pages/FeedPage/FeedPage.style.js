import styled from "styled-components";

const ProjectGrid = styled.section`
  margin: 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
`;

export { ProjectGrid };
