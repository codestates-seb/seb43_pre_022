import styled from 'styled-components';
import '../Global.css';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-100);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContainer = styled.div`
  width: 90%;
  height: 80%;
  background-color: var(--black-800);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
`;

const TwinBoxContainer = styled.div`
  width: 80%;
  height: 360px;
  padding: 15px;
  display: flex;
`;

const TwinBoxOrange = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin: 16px;
  background-color: var(--orange-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const TwinBoxBlue = styled(TwinBoxOrange)`
  background-color: var(--blue-100);
`;

const MainText = styled.div`
  font-size: 55px;
  font-weight: 900;
  color: var(--white);
  text-align: center;
  > span {
    color: var(--orange-500);
  }
`;

const TwinItemText = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 16px;
`;

const TwinButtonOrange = styled.a`
  width: 60%;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  color: var(--white);
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--orange-500);
`;

const TwinButtonBlue = styled(TwinButtonOrange)`
  background-color: var(--blue-500);
`;

function MainPage() {
  return (
    <MainContainer>
      <ItemContainer>
        <TwinBoxContainer>
          <TwinBoxOrange>
            <TwinItemText>
              Find the best answer to your technical question, help others
              answer theirs
            </TwinItemText>
            <TwinButtonOrange>Join the community</TwinButtonOrange>
          </TwinBoxOrange>
          <TwinBoxBlue>
            <TwinItemText>
              Want a secure, private space for your rechnical knowledge?
            </TwinItemText>
            <TwinButtonBlue>Discover Teams</TwinButtonBlue>
          </TwinBoxBlue>
        </TwinBoxContainer>
        <MainText>
          Every <span>developer</span> has a <br />
          tab open to stack Overflow
        </MainText>
      </ItemContainer>
    </MainContainer>
  );
}

export default MainPage;
