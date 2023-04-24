import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DivCom from '../Styles/DivCom';
import InputCom from '../Styles/InputCom';
import ListCom from '../Styles/ListCom';
import FormCom from '../Styles/FormCom';
import ButtonCom from '../Styles/ButtonCom';

import { MyPageColumns } from '../Components/MyPageColumns';

const ProfileContainer = styled(DivCom)`
  margin: 0;
`;

function MyPageProfile() {
  return (
    <ProfileContainer>
      <MyPageColumns>
        <DivCom className="columnleft"></DivCom>
        <DivCom className="columnright"></DivCom>
      </MyPageColumns>
    </ProfileContainer>
  );
}

export default MyPageProfile;
