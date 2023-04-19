import '../Global.css';

import styled from 'styled-components';

import LeftBar from './LeftBar';
import SingleQuestion from './Questions';
import RightBar from './RightBar';

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200vh;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
`;

function Main() {
  return (
    <Content>
      <LeftBar />
      <SingleQuestion />
      <RightBar />
    </Content>
  );
}

export default Main;
