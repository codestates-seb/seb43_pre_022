import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import MyPageTopandTaps from '../Components/MyPageTopandTaps';
import DivCom from '../Styles/DivCom';
import MyPageProfile from './MyPageProfile';
import EditProfile from './EditProfile';
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
  const dispatch = useDispatch();

  const id = localStorage.getItem('memberId');

  // useEffect(() => {
  //   const CUIF: any = GetUserInfo(id!);
  //   dispatch(changeUserInfo(CUIF));
  // }, []);

  return (
    <MyPageContainer>
      <div className="barwrapper">
        <LeftBar />
      </div>
      <div className="centerwrapper">
        <MyPageTopandTaps />
        <EditProfile />
      </div>
      {/* <Routes>
        <Route path="/mypage" element={<MyPageProfile />} />
        <Route path="/mypage/profile" element={<MyPageProfile />} />
        <Route path="/mypage/editprofile" element={<EditProfile />} />
      </Routes> */}
    </MyPageContainer>
  );
}

export default MyPage;
