import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { MyPageColumns } from './MyPageColumns';
import Stats from './Stats';
import { UPDATE } from '../Reducers/userInfoReducer';
import DivCom from '../Styles/DivCom';
import GetUserInfo from '../util/GetUserInfo';
import { RootState } from '../store/store';

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
  .About,
  .Badges,
  .Communities {
    display: flex;
    flex-direction: column;
  }
`;

function MyPageProfile() {
  const dispatch = useDispatch();
  const userinfo = useSelector((state: RootState) => state.userInfos);
  const navigate = useNavigate();
  const id = localStorage.getItem('memberId')?.slice(1, -1);

  useEffect(() => {
    setTimeout(() => {
      axios(
        `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/members/${id}`,
      )
        .then((response) => {
          const { data } = response.data;
          dispatch(UPDATE(data));
        })
        .catch(() => {
          navigate('/error');
        });
    }, 500);
  }, [dispatch, id, navigate]);

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
            <DivCom className="about-title">About</DivCom>
            <DivCom className="about-box">
              <div>
                Your about me section is currently blank. Would you like to add
                one?Stack Overflow
              </div>
              <a href="/editprofile">Edit profile</a>
            </DivCom>
          </DivCom>
          <DivCom className="Badges">
            <DivCom className="badges-title">Badges</DivCom>
            <DivCom className="badges-box">
              <img alt="" src="" className="comlogo" />
              <div>You have not earned any badges</div>
            </DivCom>
          </DivCom>
          <DivCom className="Communities">
            <DivCom className="comm-title">Communities</DivCom>
            <DivCom className="comm-box">
              <img alt="" src="" className="comlogo" />
              <div>
                Just getting started? Try answering a question! Your most
                helpful questions, answers and tags will appear here. Start by
                answering a question or selecting tags that match topics you’re
                interested in.
              </div>
            </DivCom>
          </DivCom>
          <DivCom className="gettest">
            <div className="1">{userinfo.memberId}</div>
            <div className="1">{userinfo.email}</div>
            <div className="1">{userinfo.displayName}</div>
            <div className="1">{userinfo.location}</div>
            <div className="1">{userinfo.title}</div>
            <div className="1">{userinfo.aboutme}</div>
          </DivCom>
        </DivCom>
      </MyPageColumns>
    </ProfileContainer>
  );
}

export default MyPageProfile;
