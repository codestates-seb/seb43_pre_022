import styled from 'styled-components';

import MyPageTopandTaps from '../Components/MyPageTopandTaps';
import DivCom from '../Styles/DivCom';
import MyPageEditProfileTap from '../Components/MyPageEditProfileTap';
import LeftBar from '../Components/LeftBar3';

const MyPageContainer = styled(DivCom)`
  .barwrapper {
    display: flex;
  }
  .centerwrapper {
    display: flex;
    flex-direction: column;
  }
`;

function MyPageEditProfile() {
  return (
    <MyPageContainer>
      <div className="barwrapper">
        <LeftBar />
      </div>
      <div className="centerwrapper">
        <MyPageTopandTaps />
        <MyPageEditProfileTap />
      </div>
    </MyPageContainer>
  );
}

export default MyPageEditProfile;
