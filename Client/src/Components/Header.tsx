import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/stacklogo2.png';
import DivCom from '../Styles/DivCom';
import InputCom from '../Styles/InputCom';
import ListCom from '../Styles/ListCom';

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
  height: 44.33px;
  width: 75vw;
  max-width: 1300px;
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  color: var(--header-color);
  height: 100%;

  #Navol {
    display: flex;
    justify-content: center;
    align-items: center;
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
  width: ${props => (props.isBlue ? '66.42px' : '58.25px')};

  font-size: 13px;
  text-decoration: none;
  border: ${props =>
    props.isBlue
      ? 'var(--blue-button)'
      : '0.2px solid var(--lightblue-button-text)'};
  color: ${props => (props.isBlue ? 'white' : 'var(--lightblue-button-text)')};
  background-color: ${props =>
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
    getuserinfo();
    navigate('/profile');
  };
  const loginClick = () => {
    navigate('/signin');
  };
  const signupClick = () => {
    navigate('/signup');
  };
  const logoutClick = () => {
    navigate('/logout');
  };

  const token = localStorage.getItem('access_token');

  return (
    <NavWrapper>
      <StyledNav>
        <div />

        <DivCom>
          <Link to="/">
            <img src={logo} alt="" width="140px" height="40px" />
          </Link>
        </DivCom>
        <NavDiv>
          <ol id="Navol">
            <StyledListCom>About</StyledListCom>
            <StyledListCom>Products</StyledListCom>
            <StyledListCom>For teams</StyledListCom>
          </ol>
        </NavDiv>

        <NavDivFlex>
          <img alt="" />
          <NavInput placeholder="Search..." maxl="240px" />
        </NavDivFlex>

        {/* 토큰 유무에 따라 다른 header 항목 렌더링 */}
        {token ? (
          <>
            <NavDiv>
              <img
                width="24px"
                height="24px"
                alt="profile"
                onClick={gotoprofile}
              />
            </NavDiv>
            <NavDiv>
              <NavButtonA isBlue={false} onClick={logoutClick}>
                Logout
              </NavButtonA>
            </NavDiv>
          </>
        ) : (
          <>
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
          </>
        )}
      </StyledNav>
    </NavWrapper>
  );
}

export default Header;
