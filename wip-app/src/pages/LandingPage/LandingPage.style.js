import styled from "styled-components";

const LandingUlStyle = styled.ul`
  list-style: none;
  padding: 0;
`;

const LandingLiStyle = styled.li`
  margin: 1rem;
`;

const LandingLogoStyle = styled.svg`
  width: 50%;
  .cls-1,
  .cls-3,
  .cls-4,
  .cls-5 {
    fill: none;
    stroke: #231f20;
  }
  .cls-1 {
    stroke-width: 2px;
  }
  .cls-2 {
    fill: #231f20;
  }
  .cls-4 {
    stroke-width: 0.25px;
  }
  .cls-5 {
    stroke-width: 0.75px;
  }
`;

export { LandingUlStyle, LandingLiStyle, LandingLogoStyle };
