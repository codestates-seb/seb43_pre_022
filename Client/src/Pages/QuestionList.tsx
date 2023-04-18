import '../Global.css';

import styled from 'styled-components';

import AllQuestions from '../Components/AllQuestions';
import LeftBar from '../Components/LeftBar';
import RightBar from '../Components/RightBar';

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200vh;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
`;

function QuestionList() {
  return (
    <Content>
      <LeftBar />
      <AllQuestions />
      <RightBar />
    </Content>
  );
}

export default QuestionList;
