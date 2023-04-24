import '../Global.css';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
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
    padding: 10px;
    text-decoration-line: none;
    color: var(--black-600);
    &:hover {
      cursor: pointer;
    }
  }
  .focus {
    background-color: rgba(0, 0, 0, 0.05);
    font-weight: bold;
    color: black;
    width: 165px;
    border-right: 3px solid var(--orange-400);
  }
`;

function LeftBar2() {
  const navigate = useNavigate();
  const goToQuesions = (e: any) => {
    const home = document.querySelector('.home');
    home!.classList.remove('focus');
    e.target.classList.add('focus');
    navigate('/');
  };

  const goToHome = (e: any) => {
    const questions = document.querySelector('.questions');
    questions!.classList.remove('focus');
    e.target.classList.add('focus');
    navigate('/');
  };

  const goToTeams = () => {
    const questions = document.querySelector('.questions');
    const home = document.querySelector('.home');
    questions!.classList.remove('focus');
    home!.classList.remove('focus');
    navigate('https://github.com/codestates-seb/seb43_pre_022');
  };

  return (
    <Div>
      <div
        className="link home"
        role="presentation"
        onClick={(e) => goToHome(e)}
      >
        Home
      </div>
      <div className="link">PUBLIC</div>
      <div
        className="link questions focus"
        role="presentation"
        onClick={(e) => goToQuesions(e)}
      >
        Questions
      </div>
      <div className="link" role="presentation" onClick={goToTeams}>
        Create TEAMS
      </div>
    </Div>
  );
}

export default LeftBar2;
