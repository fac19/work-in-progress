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

export { TopNavbarStyle, TopNavbarUlStyle };
