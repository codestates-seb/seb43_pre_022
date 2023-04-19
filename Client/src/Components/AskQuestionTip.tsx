import '../Global.css';

import styled from 'styled-components';
import pencil from '../assets/pencil.png';

const Div = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 450px;
`;

export const TipContainer = styled.div`
  width: 80%;
  height: 200px;
  border: 1px solid var(--black-400);
  border-radius: 5px;
  flex-shrink: 0;
  float: right;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  margin: 10px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  padding: 0px;
`;

const TipTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  padding: 10px;
  border-bottom: 1px solid var(--black);
  background-color: var(--black-050);
`;

const TipTextContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const TipIcon = styled.div`
  width: 64px;
  height: 64px;
  background: url(${pencil}) center no-repeat;
  background-size: cover;
  margin-right: 10px;
`;

const TipText = styled.div`
  width: 100px;
  font-size: 14px;
  flex-grow: 3;
  margin-left: 10px;
`;

function AskQuestionTip() {
  return (
    <Div>
      <TipContainer>
        <TipTitle>Writing a good title</TipTitle>
        <TipTextContainer>
          <TipIcon />
          <TipText>
            Your title should summarize the problem.
            <br /> You might find that you have a better idea of your title
            after writing out the rest of the question.
          </TipText>
        </TipTextContainer>
      </TipContainer>
      <TipContainer>
        <TipTitle>Introduce the problem</TipTitle>
        <TipTextContainer>
          <TipIcon />
          <TipText>
            Explain how you encountered the problem you`re trying to solve, and
            any difficulties that have prevented you from solving it yourself.;
          </TipText>
        </TipTextContainer>
      </TipContainer>
    </Div>
  );
}

export default AskQuestionTip;
