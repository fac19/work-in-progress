import styled from "styled-components";

const UploadDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  text-align: left;
  overflow: hidden;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  box-sizing: border-box;
  width: 100%;
`;

const FilesDiv = styled.div`
  margin-left: 32px;
  align-items: flex-start;
  justify-items: flex-start;
  flex: 1;
  overflow-y: auto;
`;
const Actions = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 32px;
`;

const Title = styled.h3`
  margin-bottom: 32px;
  color: #555;
`;

const Filename = styled.span`
  margin-bottom: 8px;
  font-size: 16px;
  color: #555;
`;

const Row = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  padding: 8px;
  overflow: hidden;
  box-sizing: border-box;
`;

const CheckIcon = styled.img`
  opacity: 0.5;
  margin-left: 32px;
`;

const ProgressWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  font-family: "Roboto medium", sans-serif;
  font-size: 14px;
  display: inline-block;
  height: 36px;
  min-width: 88px;
  padding: 6px 16px;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 0;
  border-radius: 2px;
  background: rgba(103, 58, 183, 1);
  color: #fff;
  outline: 0;
  &disabled {
    background: rgb(189, 189, 189);
    cursor: default;
  }
`;

export {
  UploadDiv,
  ContentDiv,
  FilesDiv,
  Actions,
  Title,
  Filename,
  Row,
  CheckIcon,
  ProgressWrapper,
  Button,
};
