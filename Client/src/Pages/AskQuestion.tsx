import '../Global.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Link } from 'react-router-dom';
import 'tui-color-picker/dist/tui-color-picker.css';

import styled from 'styled-components';
import AskQuestionTip from '../Components/AskQuestionTip';
import ButtonCom from '../Styles/ButtonCom';

const Div = styled.div`
  display: flex;
`;

const AskQuestionContainer = styled.div`
  width: 100vw;
  padding-top: 100px;
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
  width: 50%;
  margin-bottom: 10px;
`;

const AskQuestionNotice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue-100);
  border: 1px solid var(--blue-200);
  border-radius: 5px;
  width: 50%;
  padding: 15px;

  .SubHeadingStpes {
    font-size: 15px;
  }
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
  width: 50%;
  padding: 15px;
  margin: 20px 0px;
`;

const InputTitle = styled.input`
  width: 100%;
`;

const InputQuesiton = styled.div`
  width: 50%;
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
          <span className="SubHeadingStpes">Stpes</span>
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
        <InputTitleContainer>
          <SubHeading>Title</SubHeading>
          <Summary>
            Be specific and imagine you are asking a question to another person
          </Summary>
          <InputTitle
            type="text"
            placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
          />
        </InputTitleContainer>
        <InputQuesiton>
          <Editor
            height="400px"
            initialEditType="wysiwyg"
            plugins={[colorSyntax]}
          />
        </InputQuesiton>
        <AskButtonContainer>
          <QuestionSubmitButton>등록</QuestionSubmitButton>
          <Link to="/">
            <SubmitCansleButton>취소</SubmitCansleButton>
          </Link>
        </AskButtonContainer>
      </AskQuestionContainer>
      <AskQuestionTip />
    </Div>
  );
}

export default AskQuestion;
