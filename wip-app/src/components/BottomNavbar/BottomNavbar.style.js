import styled from "styled-components";

const BottomNavbarStyle = styled.nav`
  height: 4rem;
  border: 1px solid black;
  position: fixed;
  background-color: white;
  width: 100%;
  bottom: 0;
`;

const BottomNavbarUlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-evenly;
  padding: 0;
`;

export { BottomNavbarStyle, BottomNavbarUlStyle };
