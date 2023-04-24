import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MyPageTopandTaps from '../Components/MyPageTopandTaps';
import DivCom from '../Styles/DivCom';
import MyPageProfile from './MyPageProfile';
import EditProfile from './EditProfile';

const MyPageContainer = styled(DivCom)``;

function MyPage() {
  return (
    <MyPageContainer>
      <MyPageTopandTaps />
      <Routes>
        <Route path="/mypage" element={<MyPageProfile />} />
        <Route path="/mypage/profile" element={<MyPageProfile />} />
        <Route path="/mypage/editprofile" element={<EditProfile />} />
      </Routes>
    </MyPageContainer>
  );
}

export default MyPage;
