import '../Global.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Asked from '../Components/Asked';
import LeftBar from '../Components/LeftBar';
import Mainbar from '../Components/Mainbar';
import Sidebar from '../Components/Sidebar';
import { TypeQuestion } from '../TypeQuestion';

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: -50px;
  flex: 1;
`;

export const QuestionPage = styled.div`
  width: 65%;
  height: 100%;
  margin-top: 50px;
  float: right;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const SectionUp = styled.div`
  width: 100%;
  margin: 15px 20px 0px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  .questionTitle {
    width: 80%;
    color: var(--black-700);
    font-size: 30px;
    font-family: bold;
    line-height: 1.35;
  }
  button {
    border-radius: 3px;
    background-color: var(--blue-500);
    border: none;
    color: white;
    padding: 11px;
    font-size: 12px;
    margin-right: 10px;
  }
`;
export const SectionDown = styled.div`
  display: flex;
  justify-content: baseline;
`;

function SingleQuestion() {
  const navigate = useNavigate();

  let { id } = useParams();
  id = id?.toString();

  let token = localStorage.getItem('access_token');
  token = 'token';

  const [question, setQuestion] = useState<TypeQuestion>({
    id: '',
    questionId: '',
    title: '',
    content: '',
    createdAt: '',
    modifiedAt: '',
    memberId: '',
    answerIds: [],
  });

  useEffect(() => {
    async function getData() {
      const questionData: any = await axios.get(
        `http://localhost:4000/questions?questionId=${id}`,
      );
      setQuestion(questionData.data[0]);
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(question);

  function askQuestionBtn() {
    if (!token) {
      alert('You should sign in');
      navigate('/signin');
    } else navigate('/askquestion');
  }

  return (
    <Content>
      <LeftBar />
      <QuestionPage>
        <SectionUp>
          <Title>
            <div className="questionTitle">{question.title}</div>
            <button onClick={askQuestionBtn} type="button">
              Ask Question
            </button>
          </Title>
          <Asked
            createdAt={question.createdAt!}
            modifiedAt={question.modifiedAt!}
          />
        </SectionUp>
        <SectionDown>
          <Mainbar chooseId={id!} />
          <Sidebar />
        </SectionDown>
      </QuestionPage>
    </Content>
  );
}

export default SingleQuestion;
