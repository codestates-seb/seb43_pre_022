import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MyPageTopandTaps from '../Components/MyPageTopandTaps';
import DivCom from '../Styles/DivCom';
import MyPageProfile from './MyPageProfile';
import EditProfile from './EditProfile';
import LeftBar from '../Components/LeftBar3';

const MyPageContainer = styled(DivCom)`
  flex-direction: column;

  .barwrapper {
    display: flex;
  }
`;

function MyPage() {
  const memberId = localStorage.getItem('memberId');
  return (
    <MyPageContainer>
      <div className="barwrapper">
        <LeftBar />
        <MyPageTopandTaps />
      </div>
      <MyPageProfile />
      <Routes>
        <Route path="/mypage" element={<MyPageProfile />} />
        <Route path="/mypage/profile" element={<MyPageProfile />} />
        <Route path="/mypage/editprofile" element={<EditProfile />} />
      </Routes>
    </MyPageContainer>
  );
}

export default MyPage;
