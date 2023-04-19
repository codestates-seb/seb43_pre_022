import styled from 'styled-components';
import DivCom from '../Styles/DivCom';
import ListCom from '../Styles/ListCom';
import InputCom from '../Styles/InputCom';
import logo from '../assets/logo.png';

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
`;

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: --black-025;
  padding-top: calc(8px);
  padding-bottom: calc(8px);
  height: 50px;
  width: 75vw;
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  color: --header-color;
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
  &: hover {
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
  align-items: center;
  padding: 0 10px;
  border-radius: 3px;
  cursor: pointer;
  height: 24px;

  font-size: 10px;
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
`;

function Header() {
  return (
    <NavWrapper>
      <StyledNav>
        <div />

        <DivCom>
          <a href="/home">
            <img src={logo} alt="" width="140px" height="40px" />
          </a>
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

        <NavDiv>
          <NavButtonA isBlue={false}>Login</NavButtonA>
        </NavDiv>

        <NavDiv>
          <NavButtonA isBlue>Signup</NavButtonA>
        </NavDiv>
      </StyledNav>
    </NavWrapper>
  );
}

export default Header;
