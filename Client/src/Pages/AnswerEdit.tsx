import '../Global.css';

import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import LeftBar from '../Components/LeftBar';
import ButtonCom from '../Styles/ButtonCom';

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
`;

const AskQuestionContainer = styled.div`
  width: 60%;
  height: 100vh;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
  }
`;

const AskQuestionNotice = styled.div`
  background-color: rgb(253, 247, 226);
  border: 1px solid RGB(239 227 183);
  border-radius: 5px;
  width: 80%;
  padding: 15px;
`;

const Summary = styled.div`
  margin: 10px 0px;
  font-size: 15px;
`;

const SubHeading = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 80%;
  text-align: left;
  margin-top: 30px;
`;

const TempInput = styled.input`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  &:focus {
    border: none;
  }
`;

const AskButtonContainer = styled.div`
  display: flex;
  width: 80%;
  float: left;
`;

const QuestionSubmitButton = styled(ButtonCom)`
  background-color: var(--blue-button);
  color: var(--white);
  font-size: 12px;
  padding: 10px;
  &:hover {
    background-color: var(--blue-button-hover);
  }
  margin-right: 10px;
`;

const SubmitCancleButton = styled(ButtonCom)`
  border: none;
  height: 35px;
  font-size: 12px;
  padding: 10px;
  color: var(--blue-button);
  background: none;
`;

function AnswerEdit() {
  const navigate = useNavigate();

  const { id } = useParams();

  async function answerEditSubmit(e: any) {
    e.preventDefault();
    const date = new Date();
    try {
      await axios.patch(
        `https://54b6-116-123-109-9.ngrok-free.app/api/answers?answerId=${id}`,
        {
          content: e.target.answer.value,
          createdAt: `${
            date.toDateString().split('2023')[0]
          } at ${date.getHours()}:${date.getMinutes()}`,
        },
      );
      navigate(-1);
    } catch (error) {
      navigate('/error');
    }
  }
  return (
    <Content>
      <LeftBar />
      <AskQuestionContainer>
        <AskQuestionNotice>
          <Summary>
            Your edit will be placed in a queue until it is peer reviewed.
            <br />
            <br />
            We welcome edits that make the post eadier to understand and more
            valuble for readers. Becaue community members revies edits, please
            try to make the post substantially better than how you found it, for
            example, by fixing grammer or adding additional resources and
            hyperlinks.
          </Summary>
        </AskQuestionNotice>
        <SubHeading>Answer</SubHeading>
        <form onSubmit={(e) => answerEditSubmit(e)}>
          <TempInput
            name="answer"
            type="text"
            placeholder="Edit your Answer..."
          />
          <AskButtonContainer>
            <QuestionSubmitButton type="submit">
              Save edits
            </QuestionSubmitButton>
            <Link to="/questions">
              <SubmitCancleButton>Cancle</SubmitCancleButton>
            </Link>
          </AskButtonContainer>
        </form>
      </AskQuestionContainer>
    </Content>
  );
}

export default AnswerEdit;
