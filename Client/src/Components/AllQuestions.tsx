import '../Global.css';

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { READ } from '../Reducers/questionReducer';

import ButtonCom from '../Styles/ButtonCom';

import { Question } from '../Reducers/questionReducer';
import { RootState } from '../store/store';

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
    margin: 0;
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
  padding: 20px 10px 10px 10px;
  .QuestionTitle {
    font-size: 17px;
    color: var(--blue-600);
    &: hover {
      cursor: pointer;
      color: var(--blue-500);
    }
  }
  .QuestionText {
    font-size: 13px;
    color: var(--black);
    margin-top: 10px;
    width: 100%;
    height: 79px;
    overflow: hidden;
  }
  .CounterAnswer {
    width: 20%;
    text-align: right;
    padding: 0px 10px;
    color: var(--gray-title);
  }
  .SingleQuestionContainer {
    width: 100%;
  }
`;

const WriterInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 10px;
  > span {
    margin: 5px;
  }
`;

function AllQuestions() {
  const navigate = useNavigate();
  const singleQuestionClick = () => {
    navigate('/question');
  };

  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.crudquestion);

  useEffect(() => {
    setTimeout(async () => {
      axios('http://localhost:4000/questions')
        .then((response) => {
          const { data } = response;
          dispatch(READ(data));
        })
        .catch((error) => console.log(error));
    }, 500);
  }, [dispatch]);

  return (
    <AllQuestionContainer>
      <div className="AllQuestionHeader">
        <div className="AllQuestionTitle">All Questions</div>
        <AllQuestionButtonContainer>
          <Link to="/askquestion">
            <AskQuestionButton>Ask Question</AskQuestionButton>
          </Link>
          <SortButtonContainer>
            <SortButton>Newest</SortButton>
            <SortButton>Unanswered</SortButton>
          </SortButtonContainer>
        </AllQuestionButtonContainer>
      </div>
      <ul className="SingleQuestions">
        {questions &&
          questions.map(
            (item: Question): JSX.Element => (
              <SingleQuestion key={item.questionId}>
                <div className="CounterAnswer">
                  {item.answer.length} answers
                </div>
                <div className="SingleQuestionContainer">
                  <div
                    role="presentation"
                    className="QuestionTitle"
                    onClick={singleQuestionClick}
                  >
                    {item.title}
                  </div>
                  <div className="QuestionText">{item.content}</div>
                  <WriterInfo>
                    <span>{item.memberId}</span>
                    <span>asked {item.createdAt}</span>
                  </WriterInfo>
                </div>
              </SingleQuestion>
            ),
          )}
      </ul>
    </AllQuestionContainer>
  );
}

export default AllQuestions;
