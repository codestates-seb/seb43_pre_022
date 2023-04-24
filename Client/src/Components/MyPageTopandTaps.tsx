import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DivCom from '../Styles/DivCom';
import InputCom from '../Styles/InputCom';
import ListCom from '../Styles/ListCom';
import FormCom from '../Styles/FormCom';
import ButtonCom from '../Styles/ButtonCom';

const Wrapper = styled.div`
  position: sticky;
  margin-top: 47.33px;
`;

const MypageTopWrapper = styled(DivCom)`
  margin-bottom: calc(16px);

  .top-left {
    height: 30vh;
    width: 80vh;
  }

  #profile-img {
    width: 128px;
    height: 128px;
  }

  ul {
    display: flex;
    flex-direction: row;

    li {
      margin: 10px;
      white-space: nowrap;
    }
  }

  .top-container {
    display: flex !important;
    justify-content: space-between !important;
    width: 120vh !important;
  }

  .top-left-Username {
    display: flex !important;
    flex-direction: column;

    align-items: flex-start;
  }
  .username {
    font-size: 34px;
    margin: 10px;
    padding: 0 0 0 40px;
  }

  .top-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const MypageTaps = styled(DivCom)`
  margin-bottom: calc(16px);
`;

const EditButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 3px;
  cursor: pointer;
  height: 33px;

  font-size: 13px;
  text-decoration: none;
  border: 0.2px solid var(--black-500);
  color: var(--black-500);
  background-color: var(lightblue-button);
`;

/** userinfo 받아오는 axios */

function MyPageTopandTaps() {
  return (
    <DivCom>
      <MypageTopWrapper>
        <DivCom className="top-container">
          <DivCom className="top-left">
            <a href="http://localhost:3000/profile">
              <div>
                <img id="profile-img" alt="profile icon" />
              </div>
            </a>
            <DivCom className="top-left-Username">
              <DivCom className="username">Aron</DivCom>
              <ul>
                <li>Member for 3 days</li>
                <li>Last seen this week</li>
                <li>Visited 3 days, 3 consecutive</li>
              </ul>
            </DivCom>
          </DivCom>
          <DivCom className="top-right">
            <EditButton href="http://localhost:3000/editprofile">
              <svg width={'14px'} height={'14px'}></svg>Edit profile
            </EditButton>
          </DivCom>
        </DivCom>
      </MypageTopWrapper>
      <MypageTaps>
        <DivCom className="navigations"></DivCom>
        <DivCom className="auto"></DivCom>
      </MypageTaps>
    </DivCom>
  );
}

export default MyPageTopandTaps;
