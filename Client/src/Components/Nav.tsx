import { NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import DivCom from '../Styles/DivCom';
import ListCom from '../Styles/ListCom';
import logo from '../assets/logo.png';

const NavWrapper = styled(DivCom)`
  background-color: --black-025;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 100vw;
`;

const StyledNav = styled(Nav)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: --black-025;
  padding-top: calc(8px);
  padding-bottom: calc(8px);
  heigth: 50px;
  width: 90vw;
`;

const StyledListCom = styled(ListCom)`
  display: flex;
  color: var(--header-color);
  font-size: 10px;
  &: hover {
    color: var(--header-color-hover);
    border-radius: 10px;
    background-color: var(--black-075);
  }
`;

const NavList = styled.li`
  color: var(--header-color);

  &: hover {
    color: var(--black-900);
  }
`;

const NavDiv = styled.div`
  align-items: center;
  color: --header-color;
`;

const NavDivFlex = styled(NavDiv)`
  display: flex;
  padding-right: 10px;

  flex-basis: 400px;
  flex: 1 10 auto;
`;

const NavButtonA = styled.a<{ isBlue: boolean }>`
  display: flex;
  padding-right: 10px;
  border-radius: 3px;
  border-style: 0.2px;
  font-size: 10px;
  text-decoration: none;
  border-color: ${(props) =>
    props.isBlue ? 'var(--blue-button)' : 'var(--lightblue-button-text)'};
  color: ${(props) =>
    props.isBlue ? 'white' : 'var(--lightblue-button-text)'};
  background-color: ${(props) =>
    props.isBlue ? 'var(--blue-button)' : 'var(lightblue-button'};
`;

const NavInput = styled.input`
  display: flex;
  flex: 10 0 auto;
`;

function Navi() {
  return (
    <NavWrapper>
      <StyledNav
        activeKey="/home"
        onSelect={(selectedKey: EventTarget) =>
          alert(`selected ${selectedKey}`)
        }
      >
        <NavDropdown title="">
          <div>Home</div>
          <NavList>PUBLIC</NavList>
          <NavList>COLLECTIVES</NavList>
          <NavList>TEAMS</NavList>
        </NavDropdown>

        <DivCom>
          <a href="/home">
            <img src={logo} alt="" width="80px" />
          </a>
        </DivCom>
        <DivCom>
          <ol>
            <StyledListCom>About</StyledListCom>
            <StyledListCom>Products</StyledListCom>
            <StyledListCom>For teams</StyledListCom>
          </ol>
        </DivCom>

        <NavDivFlex>
          <img alt="" />
          <NavInput placeholder="Search..." />
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

export default Navi;
