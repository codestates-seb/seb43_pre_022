import styled from 'styled-components';

import DivCom from '../Styles/DivCom';

const EditProfileWrapper = styled(DivCom)`
  flex-direction: column;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  font-size: 15px;

  .title-box {
    display: flex;
    width: 80%;
  }

  .title {
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
    font-size: 21px;
    margin: 0 0 8px;
  }
  .content-box {
    padding: 24px;
    margin: 0 0 48px;
    border: 0.3px solid var(--black-050);
    width: 80%;
  }
`;

export default function EditProfile() {
  return (
    <EditProfileWrapper>
      <div className="title-box">
        <div className="title">
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
            <label className="Editlabel display"></label>
            <input className="Editinput display" type="text"></input>
          </div>
        </div>
      </div>
    </EditProfileWrapper>
  );
}
