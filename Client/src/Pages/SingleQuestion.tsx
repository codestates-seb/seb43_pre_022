import '../Global.css';

import styled from 'styled-components';

import Asked from '../Components/Asked';
import LeftBar from '../Components/LeftBar';
import Mainbar from '../Components/Mainbar';
import Sidebar from '../Components/Sidebar';

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const QuestionPage = styled.div`
  width: 65%;
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
  margin: 10px 20px 0px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
export const QuestionTitle = styled.div`
  width: 100%;
  color: var(--black-700);
  font-size: 30px;
  font-family: bold;
  line-height: 1.35;
`;
export const SectionDown = styled.div`
  display: flex;
  justify-content: baseline;
`;

function SingleQuestion() {
  return (
    <Content>
      <LeftBar />
      <QuestionPage>
        <SectionUp>
          <QuestionTitle>
            Ensuring a const readonly object keys conform to a const readonly
            array of values or type in TypeScript
          </QuestionTitle>
          <Asked />
        </SectionUp>
        <SectionDown>
          <Mainbar />
          <Sidebar />
        </SectionDown>
      </QuestionPage>
    </Content>
  );
}

export default SingleQuestion;
