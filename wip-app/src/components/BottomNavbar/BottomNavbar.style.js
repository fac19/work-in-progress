import styled from "styled-components";

const BottomNavbarStyle = styled.nav`
  height: 4rem;
  border-top: 0.5px solid black;
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

const BottomNavbarLiStyle = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { BottomNavbarStyle, BottomNavbarUlStyle, BottomNavbarLiStyle };
