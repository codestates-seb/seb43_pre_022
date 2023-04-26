import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/stacklogo.png';
import { RootState } from '../store/store';
import ButtonCom from '../Styles/ButtonCom';
import DivCom from '../Styles/DivCom';

const TopTapWrapper = styled.div`
  position: relative;
  padding-left: 200px;
`;

const MypageTopWrapper = styled(DivCom)`
  margin-bottom: calc(16px);
  align-items: flex-start;

  .top-left {
    height: 20vh;
    width: 50vh;
  }

  #profile-img {
    width: 128px;
    height: 128px;
    margin: 10px;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 -4px;
    padding: 0;

    li {
      white-space: nowrap;
      font-size: 13px;
      color: #6a737c;
    }
  }

  .top-container {
    display: flex !important;
    justify-content: space-between !important;
    width: 100vh !important;
  }

  .top-left-Username {
    display: flex !important;
    flex-direction: column;

    align-items: flex-start;
  }
  .username {
    font-size: 34px;
    margin: 10px;
  }

  .top-right {
    position: absolute;
    padding-left: 600px;
    padding-top: 50px;
    display: flex;

    align-items: flex-start;
  }
`;
//  profile activity saves settings Taps
const MypageTaps = styled(DivCom)`
  margin-bottom: calc(16px);

  // Taps navigation
  .navigations {
    display: flex;
    justify-content: flex-start;
  }
  // 개별 tap 항목 공통적용
  .tap {
  }
  .profile {
    color: white;
    background-color: hsl(27, 90%, 55%);
  }
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
`;

const ProfileButton = styled(ButtonCom)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  cursor: pointer;
  height: 33px;

  font-size: 13px;
  text-decoration: none;
  color: var(--black-500);

  div {
    white-space: nowrap;
  }
`;

const TapButton = styled(ButtonCom)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  cursor: pointer;
  height: 33px;

  font-size: 13px;
  text-decoration: none;

  border-radius: 1000px;

  .focus {
    background-color: hsl(27, 90%, 55%);
    color: white;
  }
`;

/** userinfo 받아오는 axios */

function MyPageTopandTaps() {
  /** useNavigate */
  const navigation = useNavigate();

  /** store에서 상태가져울준비 */
  const userinfo = useSelector((state: RootState) => state.userInfos);
  console.log(userinfo);
  /** Tap 전환하는 함수들 */
  /** Profile 클릭 시 탭 전환 */
  const profileTap = (e: any) => {
    const home = document.querySelector('.profile');
    home!.classList.remove('focus');
    e.target.classList.add('focus');
    navigation('/mypage/profile');
  };
  /** Activity 클릭 시 탭 전환 */
  const activityTap = (e: any) => {
    const home = document.querySelector('.activity');
    home!.classList.remove('focus');
    e.target.classList.add('focus');
    navigation('/mypage/profile');
  };
  /** Saves 클릭 시 탭 전환 */
  const savesTap = (e: any) => {
    const home = document.querySelector('.saves');
    home!.classList.remove('focus');
    e.target.classList.add('focus');
    navigation('/mypage/profile');
  };
  /** Settings 클릭 시 탭 전환 */
  const settingsTap = (e: any) => {
    const home = document.querySelector('.settings');
    home!.classList.remove('focus');
    e.target.classList.add('focus');
    navigation('/mypage/profile');
  };

  return (
    <TopTapWrapper>
      <MypageTopWrapper>
        <DivCom className="top-container">
          <DivCom className="top-left">
            <a href="http://localhost:3000/mypage/profile">
              <div>
                <img id="profile-img" src={logo} alt="profile icon" />
              </div>
            </a>
            <DivCom className="top-left-Username">
              <DivCom className="username">{userinfo.displayName}</DivCom>
              <ul>
                <ProfileButton onClick={profileTap}>
                  <div />
                  <div>Member for 3 days</div>
                </ProfileButton>
                <ProfileButton>
                  <div />
                  <div>Last seen this week</div>
                </ProfileButton>
                <ProfileButton>
                  <div />
                  <div>Visited 3 days, 3 consecutive</div>
                </ProfileButton>
              </ul>
            </DivCom>
          </DivCom>
          <DivCom className="top-right">
            <EditButton href="http://localhost:3000/mypage/editprofile">
              <svg width="14px" height="14px" />
              Edit profile
            </EditButton>
          </DivCom>
        </DivCom>
      </MypageTopWrapper>
      <MypageTaps>
        <div className="navigations">
          <TapButton
            className="tap profile"
            role="presentation"
            onClick={profileTap}
          >
            Profile
          </TapButton>
          <TapButton
            className="tap activity"
            role="presentation"
            onClick={activityTap}
          >
            Activity
          </TapButton>
          <TapButton className="tap" role="presentation" onClick={savesTap}>
            Saves
          </TapButton>
          <TapButton className="tap" role="presentation" onClick={settingsTap}>
            Settings
          </TapButton>
        </div>
        <DivCom className="auto" />
      </MypageTaps>
    </TopTapWrapper>
  );
}

export default MyPageTopandTaps;
