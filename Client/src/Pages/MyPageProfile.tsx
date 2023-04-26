import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { MyPageColumns } from '../Components/MyPageColumns';
import Stats from '../Components/Stats';
import { CHANGE } from '../Reducers/userInfoReducer';
import DivCom from '../Styles/DivCom';
import GetUserInfo from '../util/GetUserInfo';

const ProfileContainer = styled(DivCom)`
  margin: 0;
  /* left */
  .columnleft {
    flex-direction: column;
    align-items: flex-start;
    flex-basis: calc(25%-24px);
    margin: 12px;
  }

  /* right */
  .columnright {
    flex-direction: column;
  }
`;

function MyPageProfile() {
  const dispatch = useDispatch();

  /** Userinfo GET test buttonEventhandler */
  const testhandler = () => {
    const memberid = localStorage.getItem('memberId');
    console.log(memberid);
    if (memberid !== null) {
      const user = GetUserInfo(memberid);
      dispatch(CHANGE(user));
    }
  };

  return (
    <ProfileContainer>
      <MyPageColumns>
        <DivCom className="columnleft">
          <Stats />
          <DivCom className="Communities">
            <DivCom className="comm-title">Communities</DivCom>
            <DivCom className="comm-box">
              <img alt="" src="" className="comlogo" />
              <div>Stack Overflow</div>
              <div>1</div>
            </DivCom>
          </DivCom>
        </DivCom>
        <DivCom className="columnright">
          <DivCom className="About">
            <DivCom className="about-title">Communities</DivCom>
            <DivCom className="about-box">
              <div>
                Your about me section is currently blank. Would you like to add
                one?Stack Overflow
              </div>
              <a href="/editprofile">Edit profile</a>
            </DivCom>
          </DivCom>
          <DivCom className="Badges">
            <DivCom className="badges-title">Communities</DivCom>
            <DivCom className="badges-box">
              <img alt="" src="" className="comlogo" />
              <div>Stack Overflow</div>
              <div>1</div>
            </DivCom>
          </DivCom>
          <DivCom className="Communities">
            <DivCom className="comm-title">Communities</DivCom>
            <DivCom className="comm-box">
              <img alt="" src="" className="comlogo" />
              <div>Stack Overflow</div>
              <div>1</div>
            </DivCom>
          </DivCom>
        </DivCom>
      </MyPageColumns>
    </ProfileContainer>
  );
}

export default MyPageProfile;
