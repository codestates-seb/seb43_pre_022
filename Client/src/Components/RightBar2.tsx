import '../Global.css';

import styled from 'styled-components';

export const Div = styled.div`
  width: 300px;
  height: 308px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  flex-shrink: 0;
  font-size: 12px;
  float: right;
  background-color: var(--yellow-050);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  margin-top: 185px;
  margin-left: 10px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  .background {
    background-color: var(--yellow-100);
    padding: 10px;
    font-weight: bold;
    color: var(--black-600);
  }
  .text {
    background-color: var(--yellow-050);
    padding: 7px 15px;
  }
`;
function RightBar2() {
  return (
    <Div>
      <div className="background">The Overflow Blog</div>
      <div className="text">The philosopher who believes in Web Assembly</div>
      <div className="text">Community is the future of AI</div>
      <div className="background">Featured on Meta</div>
      <div className="text">
        Improving the copy in the close modal and post notices - 2023 edition
      </div>
      <div className="text">Temporary policy: ChatGPT is banned</div>
      <div className="text">The [protection] tag is being burninated </div>
      <div className="text">
        Content Discovery initiative 4/13 update: Related questions using a
        Machine...
      </div>
    </Div>
  );
}

export default RightBar2;
