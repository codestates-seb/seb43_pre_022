import '../Global.css';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonCom from '../Styles/ButtonCom';

export const AllQuestionContainer = styled.div`
  margin-top: 50px;
  width: 50%;
  height: 100vh;
  border-left: 1px solid rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    left: 0px;
    width: 100%;
  }
  .AllQuestionHeader {
    height: 150px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  .SingleQuestions {
    list-style-type: none;
    padding: 10px;
  }
  .AllQuestionTitle {
    width: 100%;
    font-size: 27px;
    margin: 20px;
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
  const navigate = useNavigate();
  const singleQuestionClick = () => {
    navigate('/question');
  };
  return (
    <AllQuestionContainer>
      <div className="AllQuestionHeader">
        <div className="AllQuestionTitle">All Questions</div>
        <AllQuestionButtonContainer>
          <AskQuestionButton>Ask Question</AskQuestionButton>
          <SortButtonContainer>
            <SortButton>Newest</SortButton>
            <SortButton>Unanswered</SortButton>
          </SortButtonContainer>
        </AllQuestionButtonContainer>
      </div>
      <ul className="SingleQuestions">
        <SingleQuestion>
          <div className="CounterAnswer">0answers</div>
          <div>
            <div
              role="presentation"
              className="QuestionTitle"
              onClick={singleQuestionClick}
            >
              어쩌구저쩌구 제목 어쩌구
            </div>
            <div className="QuestionText">
              내용이 많으면?내용이 많으면?내용이 많으면?내용이 많으면?내용이
              많으면?내용이 많으면?내용이 많으면?내용이 많으면?내용이
              많으면?내용이 많으면?내용이 많으면?내용이 많으면?내용이
              많으면?내용이 많으면?내용이 많으면?내용이 많으면?내용이
              많으면?내용이 많으면?내용이 많으면?내용이 많으면?내용이
              많으면?내용이 많으면?
            </div>
            <WriterInfo>
              <span>raccoon0814</span>
              <span>asked 12 min ago</span>
            </WriterInfo>
          </div>
        </SingleQuestion>
      </ul>
    </AllQuestionContainer>
  );
}

export default AllQuestions;
