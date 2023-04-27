import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import '../Global.css';

import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';
import { RootState } from '../store/store';

import DivCom from '../Styles/DivCom';
import ButtonCom from '../Styles/ButtonCom';

const EditProfileWrapper = styled(DivCom)`
  flex-direction: column;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  font-size: 1.15rem;

  h1 {
    font-size: 2.076rem;
  }

  .title-wrapper {
    display: flex;
    width: 80%;
  }

  .Ptitle {
    margin: 0 0 24px;
    padding: 0 0 16px;
    border-bottom: 0.5px solid var(--black-050);
  }
  .title-gap {
    flex-grow: 1;
    margin: 0 0 24px;
    padding: 0 0 16px;
    border-bottom: 0.5px solid var(--black-050);
  }
  .hide {
    color: white;
  }

  .content-title {
    font-size: 1.615rem;
    margin: 0 0 8px;
  }
  .content-box {
    padding: 24px;
    margin: 0 0 48px;
    border: 0.3px solid var(--black-050);
    width: 80%;
  }

  .display-box,
  .location-box,
  .title-box,
  .aboutme-box {
    display: flex;
    flex-direction: column;
  }

  #displayinput,
  #locationinput,
  #titleinput,
  #aboutmeinput {
    max-width: calc((97.2307692rem / 12) * 4);
  }
`;

const ProfileEditButtonContainer = styled.div`
  display: flex;
  width: 80%;
  float: left;
`;

const ProfileSubmitButton = styled(ButtonCom)`
  background-color: var(--blue-button);
  color: var(--white);
  font-size: 12px;
  margin-top: 20px;
  padding: 10px;
  &:hover {
    background-color: var(--blue-button-hover);
  }
  margin-right: 10px;
`;

const ProfileEditCancleButton = styled(ButtonCom)`
  border: none;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;
  padding: 10px;
  color: var(--blue-button);
  background: none;
`;

export default function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userinfo = useSelector((state: RootState) => state.userInfos);
  const id = Number(userinfo.memberId);
  const [userInfo, setUserInfo] = useState({
    memberId: id,
    email: userinfo.email,
    displayName: userinfo.displayName,
    location: userinfo.location,
    title: userinfo.title,
    aboutme: userinfo.aboutme,
  });

  const AMRef: any = useRef();

  /** displayname onChange */
  const DNonChange = (e: any) => {
    setUserInfo({ ...userInfo, displayName: e.target.value });
    console.log(userInfo);
  };
  /** editor onChange */
  const LNonChange = (e: any) => {
    setUserInfo({ ...userInfo, location: e.target.value });
  };
  /** editor onChange */
  const TTonChange = (e: any) => {
    setUserInfo({ ...userInfo, title: e.target.value });
  };
  /** editor onChange */
  const AMonChange = () => {
    const input = AMRef.current.getInstance().getHTML();
    setUserInfo({ ...userInfo, aboutme: input });
    console.log(userInfo);
  };

  /** patch 보내는 axios */
  async function ProfileEditSubmit(e: any) {
    e.preventDefault();
    try {
      await axios.patch(
        `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/members/profile/${id}`,
        userInfo,
      );
      navigate(-1);
    } catch (error) {
      navigate('/error');
    }
  }

  return (
    <EditProfileWrapper>
      <div className="title-wrapper">
        <div className="Ptitle">
          <h1>Edit your Profile</h1>
        </div>
        <div className="title-gap">
          <h1 className="hide">Gap</h1>
        </div>
      </div>

      <div className="content-title">Public information</div>
      <div className="content-box">
        <div className="image-box">
          <label className="image-title" htmlFor="image">
            Profile image
          </label>
          <div className="image">
            <img
              role="presentation"
              width="164px"
              height="164px"
              alt="profile"
              src="https://bantax.co.kr/common/img/default_profile.png"
            />
          </div>
          <div className="display-box">
            <label className="Editlabel display" htmlFor="displayinput">
              Display name
            </label>
            <input
              id="displayinput"
              className="Editinput"
              type="text"
              onChange={DNonChange}
            />
          </div>
          <div className="location-box">
            <label className="Editlabel location" htmlFor="locationinput">
              Location
            </label>
            <input
              id="locationinput"
              className="Editinput"
              type="text"
              onChange={LNonChange}
            />
          </div>
          <div className="title-box">
            <label className="Editlabel title" htmlFor="titleinput">
              Title
            </label>
            <input
              id="titleinput"
              className="Editinput"
              type="text"
              onChange={TTonChange}
            />
          </div>
          <div className="aboutme-box">
            <form onSubmit={(e) => ProfileEditSubmit(e)}>
              <label className="Editlabel aboutme" htmlFor="aboutmeinput">
                Aboutme
              </label>
              <Editor
                initialEditType="wysiwyg"
                plugins={[colorSyntax]}
                language="ko-KR"
                ref={AMRef}
                onChange={AMonChange}
              />
              <ProfileEditButtonContainer>
                <ProfileSubmitButton type="submit">
                  Save profile
                </ProfileSubmitButton>
                <Link to="/api/mypage">
                  <ProfileEditCancleButton>Cancel</ProfileEditCancleButton>
                </Link>
              </ProfileEditButtonContainer>
            </form>
          </div>
        </div>
      </div>
    </EditProfileWrapper>
  );
}
