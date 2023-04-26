import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DivCom from '../Styles/DivCom';
import ListCom from '../Styles/ListCom';
import FormCom from '../Styles/FormCom';
import ButtonCom from '../Styles/ButtonCom';

const LogOutwrapper = styled(DivCom)`
  padding-top: 100px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  height: 75vh;
`;

const LogOutForm = styled(FormCom)`
  display: flex;
  flex-direction: column;
  margin: 0 105px 24px;
  max-width: 316px;
  height: 423px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

const LogOutList = styled(ListCom)`
  margin: 0;
  padding: 0;
`;

const LogOutDiv = styled(DivCom)`
  display: flex;
  flex-direction: column;
  .Message {
    flex-wrap: wrap;
    font-size: 21px;
    margin: 0 0 24px;
    width: 526px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
  }
  .LOsection2 {
    height: 20px;
    width: 268px;
    margin: 0 0 16px;
  }
  .LOsection3 {
    height: 42px;
    width: 268px;
  }
  .LOsectionbottom {
    font-size: 12px;
    color: hsl(210, 8%, 45%);
    margin-top: 32px;
  }
`;

const ULLogOutForm = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid var(--black-100);
  padding: 24px;
  width: 268px;
`;

const LOButton = styled(ButtonCom)`
  margin: 2px;
  color: white;
  background-color: var(--blue-600);
  &:hover {
    background-color: var(--blue-700);
  }
  #LOCancel {
    background-color: none;
    color: var(--blue-600);
  }
`;

function LogOut() {
  /** useNavigate */
  const navigation = useNavigate();

  /** logout 성공 시 토큰 등 전부 삭제 */
  const logoutsuccess = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('memberId');
    localStorage.removeItem('displayName');
  };

  /** logout 취소 시 경로 이동 */
  const logoutcancel = () => {
    navigation(-1);
  };

  return (
    <LogOutwrapper>
      <LogOutDiv>
        <DivCom className="Message">
          Clicking “Log out” will log you out of the following domains on this
          device:
        </DivCom>
        <LogOutForm paddings="24px">
          <ULLogOutForm>
            <LogOutList>askubuntu.com</LogOutList>
            <LogOutList>mathoverflow.net</LogOutList>
            <LogOutList>serverfault.com</LogOutList>
            <LogOutList>stackapps.com</LogOutList>
            <LogOutList>stackexchange.com</LogOutList>
            <LogOutList>stackoverflow.com</LogOutList>
            <LogOutList>superuser.com</LogOutList>
          </ULLogOutForm>
          <div className="input-container">
            <div className="LOsection2">
              <input id="LOcheckbox" name="LOcheckbox" type="checkbox" />
              <label id="LOinputlabel" htmlFor="LOcheckbox">
                Log out on all devices
              </label>
            </div>
            <div className="LOsection3">
              <LOButton paddings="10px" onClick={logoutsuccess}>
                Log out
              </LOButton>
              <LOButton paddings="10px" id="LOCancel" onClick={logoutcancel}>
                Cancel
              </LOButton>
            </div>
            <div className="LOsectionbottom">
              If you’re on a shared computer, remember to log out of your Open
              ID provider (Facebook, Google, Stack Exchange, etc.) as well.
            </div>
          </div>
        </LogOutForm>
      </LogOutDiv>
    </LogOutwrapper>
  );
}

export default LogOut;
