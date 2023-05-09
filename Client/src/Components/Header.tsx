import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/stacklogo2.png';
import DivCom from '../Styles/DivCom';
import InputCom from '../Styles/InputCom';
import ListCom from '../Styles/ListCom';
import GetUserInfo from '../util/GetUserInfo';

const NavWrapper = styled(DivCom)`
  background-color: var(--black-025);
  position: sticky;
  top: 0;
  z-index: 1;
  border-top: 3px solid var(--orange-400);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  height: 47.33px;
  width: 100vw;
  position: sticky;
  top: 0px;
  z-index: 1;
  border-top: 3px solid var(--orange-400);
`;

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--black-025);
  padding-top: calc(8px);
  padding-bottom: calc(8px);
  margin-left: 20vw;
  margin-right: 20vw;
  height: 44.33px;
  width: calc(100vw - 100px);
  max-width: 1300px;

  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    margin-left: 0px;
    width: 100%;
    .hidden {
      display: none;
    }
  }
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  color: var(--header-color);
  height: 100%;
  img {
    border-radius: 3px;
  }

  #Navol {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      white-space: nowrap;
    }
  }
`;

const StyledListCom = styled(ListCom)`
  padding-right: 10px;
  color: var(--header-color);
  font-size: 12px;

  &:hover {
    color: var(--header-color-hover);
    border-radius: 10px;
    background-color: var(--black-075);
  }
`;

const NavDivFlex = styled(NavDiv)`
  display: flex;
  padding: 0 10px;

  flex: 1 2 auto;
`;

const NavButtonA = styled.a<{ isBlue: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 3px;
  cursor: pointer;
  height: 33px;
  width: ${(props) => (props.isBlue ? '66.42px' : '58.25px')};

  font-size: 13px;
  text-decoration: none;
  border: ${(props) =>
    props.isBlue
      ? 'var(--blue-button)'
      : '0.2px solid var(--lightblue-button-text)'};
  color: ${(props) =>
    props.isBlue ? 'white' : 'var(--lightblue-button-text)'};
  background-color: ${(props) =>
    props.isBlue ? 'var(--blue-button)' : 'var(lightblue-button'};
`;

const NavInput = styled(InputCom)`
  display: flex;
  flex: 10 0 auto;
  max-width: 670px;
`;

function Header() {
  const navigate = useNavigate();
  const gotoprofile = () => {
    GetUserInfo('1');
    navigate('/api/mypage/profile');
  };
  const loginClick = () => {
    navigate('/api/signin');
  };
  const signupClick = () => {
    navigate('/api/signup');
  };
  const logoutClick = () => {
    navigate('/api/logout');
  };

  const token = localStorage.getItem('accessToken');

  return (
    <NavWrapper>
      <StyledNav>
        <div />

        <DivCom>
          {token ? (
            <Link to="/api/questions">
              <img src={logo} alt="" width="140px" height="40px" />
            </Link>
          ) : (
            <Link to="/">
              <img src={logo} alt="" width="140px" height="40px" />
            </Link>
          )}
        </DivCom>
        <NavDiv>
          {/* token 유무에 따라 다른 항목 렌더링 */}
          {token ? (
            <DivCom>
              <ol id="Navol">
                <StyledListCom>About</StyledListCom>
              </ol>
            </DivCom>
          ) : (
            <DivCom>
              <ol id="Navol">
                <StyledListCom>About</StyledListCom>
                <StyledListCom className="hidden">Products</StyledListCom>
                <StyledListCom className="hidden">For teams</StyledListCom>
              </ol>
            </DivCom>
          )}
        </NavDiv>

        <NavDivFlex>
          <img alt="" />
          <NavInput placeholder="Search..." maxl="240px" />
        </NavDivFlex>

        {/* 토큰 유무에 따라 다른 header 항목 렌더링 */}
        {token ? (
          <DivCom>
            <NavDiv>
              <img
                role="presentation"
                onClick={gotoprofile}
                width="24px"
                height="24px"
                alt="profile"
                src="https://bantax.co.kr/common/img/default_profile.png"
              />
            </NavDiv>
            <NavDiv>
              <NavButtonA isBlue={false} onClick={logoutClick}>
                Logout
              </NavButtonA>
            </NavDiv>
          </DivCom>
        ) : (
          <DivCom>
            <NavDiv>
              <NavButtonA isBlue={false} onClick={loginClick}>
                Login
              </NavButtonA>
            </NavDiv>
            <NavDiv>
              <NavButtonA isBlue onClick={signupClick}>
                Signup
              </NavButtonA>
            </NavDiv>
          </DivCom>
        )}
      </StyledNav>
    </NavWrapper>
  );
}

export default Header;
