import './Global.css';

import styled from 'styled-components';

export const Mainbar = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100vh;
  border: 1px solid gray;
  word-break: break-all;
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    left: 0px;
    width: 100%;
  }
  .QuestionTitle {
    height: 150px;
    width: 100%;
    border: 1px solid gray;
  }
  .QuestionContent {
    height: 300px;
    width: 100%;
    border: 1px solid gray;
  }
  .AnswerList {
    height: 300px;
    width: 100%;
    border: 1px solid gray;
  }
  .AnswerInput {
    height: 300px;
    width: 100%;
    border: 1px solid gray;
  }
`;

function SingleQuestion() {
  return (
    <Mainbar>
      <div className="QuestionTitle">Question Title</div>
      <div className="QuestionContent">Question content</div>
      <div className="AnswerList">AnswerList</div>
      <div className="AnswerInput">Write Answer</div>
    </Mainbar>
  );
}

export default SingleQuestion;
