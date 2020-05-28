import styled from "styled-components";

const DropzoneArea = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fff;
  border: 2px dashed rgb(187, 186, 186);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
`;
// const Hightlight = styled.div`
//   background-color: rgb(188, 185, 236);
// `;
const Icon = styled.img`
  opacity: 0.3;
  height: 64px;
  width: 64px;
`;

const FileInput = styled.input`
  display: none;
`;

export { DropzoneArea, Icon, FileInput };
