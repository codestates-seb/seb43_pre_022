import styled from 'styled-components';
import '../Global.css';

const MainContainer = styled.div`
  width: 100vw;
  height: 960px;
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
  padding: 15px 15px 0px 15px;
  display: flex;
`;

const TwinBoxOrange = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin: 0px 16px 0px 0px;
  background-color: var(--orange-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  @media screen and (min-width: 600px) {
    border-bottom-right-radius: 0px;
  }
`;

const TwinBoxBlue = styled(TwinBoxOrange)`
  background-color: var(--blue-100);
  border-radius: 10px;
  margin: 0px 0px 0px 16px;
  @media screen and (min-width: 600px) {
    border-bottom-left-radius: 0px;
  }
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
  &:hover {
    background-color: var(--orange-600);
  }
`;

const TwinButtonBlue = styled(TwinButtonOrange)`
  background-color: var(--blue-500);
  &:hover {
    background-color: var(--blue-600);
  }
`;

const AdditionalTextContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 10px;
`;

const AdditionalText = styled.div`
  width: 25%;
  height: 100px;
  margin: 10px 0px 10px 10px;
  text-align: center;
  color: var(--white);
  > span {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Triangles = styled.div`
  display: flex;
`;

const OrangeTriangle = styled.div`
  width: 32px;
  height: 32px;
  margin: 0px 16px 16px 0px;
  clip-path: polygon(18px 0, 32px 0, -8px 40px, 0 38px, 0 0, 18px 0);
  background-color: var(--orange-100);
  transform: scaleX(-1);
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const BlueTriangle = styled(OrangeTriangle)`
  background-color: var(--blue-100);
  margin: 0px 0px 16px 16px;
  transform: scaleX(1);
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
        <Triangles>
          <OrangeTriangle />
          <BlueTriangle />
        </Triangles>
        <MainText>
          Every <span>developer</span> has a <br />
          tab open to stack Overflow
        </MainText>
        <AdditionalTextContainer>
          <AdditionalText>
            <span>100+ million</span>
            <br /> monthly visitors to Stack Overflow & Stack Exchange
          </AdditionalText>
          <AdditionalText>
            <span>45.1 billion</span>
            <br /> Times a developer got help since 2008
          </AdditionalText>
          <AdditionalText>
            <span>191% ROI</span>
            <br /> from companies using Stack Overflow for Teams
          </AdditionalText>
          <AdditionalText>
            <span>5,000+</span>
            <br /> Stack Overflow for Teams instances active every day
          </AdditionalText>
        </AdditionalTextContainer>
      </ItemContainer>
    </MainContainer>
  );
}

export default MainPage;
