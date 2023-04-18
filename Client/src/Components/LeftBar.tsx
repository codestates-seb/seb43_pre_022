import '../Global.css';

import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 50px;
  color: var(--black-600);
  box-sizing: border-box;
  position: sticky;
  margin-top: 50px;
  height: 400px;
  border: 1px solid gray;
  flex-shrink: 0;
  width: 164px;
  z-index: var(--zi-dropdown);
  box-shadow: 0 0 0 hsla(210, 8%, 5%, 0.05);
  transition: box-shadow ease-in-out 0.1s, transform ease-in-out 0.1s;
  transform: translateZ(0);
  @media screen and (max-width: 1000px) {
    left: 0px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
  .link {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

function LeftBar() {
  return (
    <Div>
      <div className="link">Home</div>
      <div className="link">PUBLIC</div>
      <div className="link">Questions</div>
      <div className="link">Create TEAMS</div>
    </Div>
  );
}

export default LeftBar;
