import '../Global.css';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 50px;
  color: var(--black-600);
  box-sizing: border-box;
  position: sticky;
  top: 70px;
  height: 400px;
  flex-shrink: 0;
  width: 164px;
  z-index: var(--zi-dropdown);
  box-shadow: 0 0 0 hsla(210, 8%, 5%, 0.05);
  transition: box-shadow ease-in-out 0.1s, transform ease-in-out 0.1s;
  transform: translateZ(0);
  float: left;
  margin-left: 10px;
  @media screen and (max-width: 1000px) {
    left: 10px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
  .link {
    font-size: 13px;
    margin-bottom: 20px;
    text-decoration-line: none;
    color: var(--black-600);
  }
`;

function LeftBar() {
  return (
    <Div>
      <div className="link">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <div className="link">PUBLIC</div>
      <div className="link">
        <Link to="/" className="link">
          Questions
        </Link>
      </div>
      <div className="link">
        <Link
          to="https://github.com/codestates-seb/seb43_pre_022"
          className="link"
        >
          Create TEAMS
        </Link>
      </div>
    </Div>
  );
}

export default LeftBar;
