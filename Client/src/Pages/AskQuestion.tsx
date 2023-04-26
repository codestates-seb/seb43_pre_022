import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '../Global.css';

import { useRef, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';

import AskQuestionTip from '../Components/AskQuestionTip';
import { CREATE } from '../Reducers/questionReducer';
import { RootState } from '../store/store';
import ButtonCom from '../Styles/ButtonCom';

const Div = styled.div`
  display: flex;
`;

const AskQuestionContainer = styled.div`
  width: 100vw;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

const AskQuestionTitle = styled.div`
  font-size: 27px;
  font-weight: bold;
  width: 460.6px;
  margin-bottom: 10px;
  text-align: center;
`;

const AskQuestionNotice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue-100);
  border: 1px solid var(--blue-200);
  border-radius: 5px;
  width: 460.6px;
  padding: 15px;
`;

const SubHeadingStpes = styled.span`
  font-size: 15px;
`;

const SubHeading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Summary = styled.div`
  margin: 10px 0px;
  font-size: 15px;
`;

const InputTitleContainer = styled.div`
  border: 1px solid var(--black);
  width: 100%;
  padding: 15px;
  margin: 20px 0px;
`;

const InputTitle = styled.input`
  width: 100%;
`;

// const InputText = styled(InputTitle)`
//   width: 100%;
//   height: 300px;
// `;

const InputQuesiton = styled.div`
  width: 100%;
`;

const AskButtonContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 20px 0px;
`;

const QuestionSubmitButton = styled(ButtonCom)`
  width: 60px;
  background-color: var(--blue-button);
  color: var(--white);
  font-size: 13px;
  &:hover {
    background-color: var(--blue-button-hover);
  }
  margin-right: 10px;
`;

const SubmitCansleButton = styled(ButtonCom)`
  width: 60px;
  border: 1px solid var(--black-500);
  height: 35px;
  font-size: 12px;
`;

function AskQuestion() {
  let token = localStorage.getItem('accessToken')!;
  token = token.slice(1, -1);
  console.log(token);

  const [titleValue, setTitleValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const questions = useSelector((state: RootState) => state.crudquestion);
  const editorRef: any = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    setInputValue(data);
  };

  const handleSubmit = (e: any) => {
    const date = new Date();
    e.preventDefault();
    axios
      .post(
        'http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/questions',
        {
          questionId: (questions.length + 1).toString(),
          title: titleValue,
          content: inputValue,
          createdAt: `${
            date.toDateString().split('2023')[0]
          } at ${date.getHours()}:${date.getMinutes()}`,
          modifiedAt: `${
            date.toDateString().split('2023')[0]
          } at ${date.getHours()}:${date.getMinutes()}`,
          memberId: 'raccoon0814',
          answerIds: [],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        },
      )
      .then((response) => {
        const { data } = response;
        dispatch(CREATE(data));
        navigate('/api/questions');
      })
      .catch((error) => console.error(error));
  };

  return (
    <Div>
      <AskQuestionContainer>
        <AskQuestionTitle>Ask a public question</AskQuestionTitle>
        <AskQuestionNotice>
          <SubHeading>Writing a good question</SubHeading>
          <Summary>
            You’re ready to ask a programming-related question and this form
            will help guide you through the process. Looking to ask a
            non-programming question? See the topics here to find a relevant
            site.
          </Summary>
          <SubHeadingStpes>Stpes</SubHeadingStpes>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </AskQuestionNotice>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputTitleContainer>
            <SubHeading>Title</SubHeading>
            <Summary>
              Be specific and imagine you are asking a question to another
              person
            </Summary>
            <InputTitle
              type="text"
              placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
              value={titleValue}
              onChange={(event) => setTitleValue(event.target.value)}
            />
          </InputTitleContainer>
          <InputQuesiton>
            <Editor
              height="400px"
              initialEditType="wysiwyg"
              plugins={[colorSyntax]}
              language="ko-KR"
              ref={editorRef}
              onChange={onChange}
            />
            {/* <InputText
              type="text"
              placeholder="내용을 입력하세요"
              value={inputValue}
              onChange={(evnet) => setInputValue(evnet.target.value)}
            /> */}
          </InputQuesiton>
          <AskButtonContainer>
            <QuestionSubmitButton type="submit">등록</QuestionSubmitButton>
            <Link to="/api/questions">
              <SubmitCansleButton>취소</SubmitCansleButton>
            </Link>
          </AskButtonContainer>
        </form>
      </AskQuestionContainer>
      <AskQuestionTip />
    </Div>
  );
}

export default AskQuestion;
