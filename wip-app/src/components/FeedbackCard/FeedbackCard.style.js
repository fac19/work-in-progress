import styled from "styled-components";

const FeedbackText = styled.p`
  margin: 0.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const FeedbackTag = styled.p`
  margin-top: 0.55rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid lightgrey;
  border-bottom: 0.5px solid lightgrey;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const FeedbackUser = styled.h3`
  margin: 0.5rem;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
`;

const FeedbackInput = styled.input`
  width: 90%;
  height: 2rem;
  border-radius: 3px;
  border: 0.5px solid black;
`;

const FeedbackButton = styled.button`
  margin-left: 0.3rem;
  width: 2rem;
  background-color: #2096ee;
  color: white;
  font-size: 1.5rem;
  border: 0.5px solid black;
  border-radius: 3px;
`;

const FeedbackArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin: 1em 0;
  padding: 3em;
  border-radius: 3em;
  text-align: center;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 1em 2em 0 rgba(0, 0, 0, 0.3);
  }
`;

const FeedbackHeader = styled.header`
  border-bottom: 1px solid lightgrey;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid lightgrey;
  margin: 1rem;
`;

const FeedbackList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0.1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export {
  FeedbackText,
  FeedbackTag,
  Comment,
  FeedbackUser,
  Step,
  FeedbackForm,
  FeedbackInput,
  FeedbackButton,
  FeedbackArticle,
  FeedbackHeader,
  FeedbackList,
};
