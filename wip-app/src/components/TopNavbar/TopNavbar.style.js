import styled from "styled-components";

const TopNavbarStyle = styled.nav`
  height: 4rem;
  border: 1px solid black;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
`;

const TopNavbarUlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-evenly;
  padding: 0;
`;

const TopNavbarLogoStyle = styled.svg`
  height: 2rem;
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

export { TopNavbarStyle, TopNavbarUlStyle, TopNavbarLogoStyle };
