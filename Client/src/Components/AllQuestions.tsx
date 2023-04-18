import '../Global.css';

import styled from 'styled-components';

export const Mainbar = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100vh;
  margin-top: 50px;
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
  .QuestionsAll {
    height: 150px;
    width: 100%;
    border: 1px solid gray;
  }
`;

function AllQuestions() {
  return (
    <Mainbar>
      <div className="QuestionsAll">All Questions</div>
      <div>single question</div>
    </Mainbar>
  );
}

export default AllQuestions;
import '../Global.css';

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
  .QuestionsAll {
    height: 150px;
    width: 100%;
    border: 1px solid gray;
  }
`;

function AllQuestions() {
  return (
    <Mainbar>
      <div className="QuestionsAll">All Questions</div>
      <div>single question</div>
    </Mainbar>
  );
}

export default AllQuestions;
