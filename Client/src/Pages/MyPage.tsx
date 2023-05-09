import styled from 'styled-components';

import MyPageTopandTaps from '../Components/MyPageTopandTaps';
import DivCom from '../Styles/DivCom';
import MyPageProfile from '../Components/MyPageProfileTap';
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

function MyPage() {
  return (
    <MyPageContainer>
      <div className="barwrapper">
        <LeftBar />
      </div>
      <div className="centerwrapper">
        <MyPageTopandTaps />
        <MyPageProfile />
      </div>
    </MyPageContainer>
  );
}

export default MyPage;
