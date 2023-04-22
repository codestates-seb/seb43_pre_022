import '../Global.css';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ButtonCom from '../Styles/ButtonCom';

export const AllQuestionContainer = styled.div`
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

const AskQuestionButton = styled(ButtonCom)`
  background-color: var(--blue-button);
  width: 100px;
  height: 40px;
  color: var(--white);
  font-size: 13px;
  &:hover {
    background-color: var(--blue-button-hover);
  }
`;

const AllQuestionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
`;

const SortButtonContainer = styled.div`
  height: 30px;
  margin-top: 5px;
`;

const SortButton = styled(ButtonCom)`
  border: 1px solid gray;
  height: 35px;
  font-size: 12px;
`;

const SingleQuestion = styled.li`
  display: flex;
  width: 100%;
  height: 160px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  list-style-type: none;
  .QuestionTitle {
    font-size: 17px;
    color: var(--blue-600);
    &:hover {
      cursor: pointer;
      color: var(--blue-500);
    }
  }
  .QuestionText {
    font-size: 13px;
    color: var(--black);
  }
  .CounterAnswer {
    width: 40%;
    text-align: right;
    font-weight: bold;
    padding: 10px;
  }
`;

const WriterInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  > span {
    margin: 5px;
  }
`;

function AllQuestions() {
  const question = { id: 1 };
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
            <Link
              to={{ pathname: `/question/${question.id}` }}
              style={{ textDecoration: 'none' }}
            >
              <div className="QuestionTitle" role="presentation">
                어쩌구저쩌구 제목 어쩌구
              </div>
            </Link>
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
