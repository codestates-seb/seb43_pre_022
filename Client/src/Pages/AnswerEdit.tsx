import '../Global.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import { useRef } from 'react';

import axios from 'axios';
import Prism from 'prismjs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';

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
  margin-bottom: 20px;
`;

const AskButtonContainer = styled.div`
  display: flex;
  width: 80%;
  float: left;
  margin-top: 20px;
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

  const editorRef = useRef<Editor>(null);
  async function answerEditSubmit(e: any) {
    e.preventDefault();
    const date = new Date();
    const getContentMd = editorRef.current?.getInstance().getMarkdown() || '';
    try {
      await axios.patch(
        `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/answers/${id}`,
        {
          content: getContentMd,
          createdAt: `${
            date.toDateString().split('2023')[0]
          } at ${date.getHours()}:${date.getMinutes()}`,
        },
      );
      navigate(-1);
    } catch (error: any) {
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
          <Editor
            placeholder="Write Answer..."
            previewStyle="tab"
            height="400px"
            initialEditType="markdown"
            useCommandShortcut
            ref={editorRef}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            hideModeSwitch
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
