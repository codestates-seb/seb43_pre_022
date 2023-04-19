import styled from 'styled-components';

import DivCom from '../Styles/DivCom';
import FormCom from '../Styles/FormCom';
import ButtonCom from '../Styles/ButtonCom';

import logo1 from '../assets/stacklogo.png';

const BackContainer = styled(DivCom)`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  margin-top: 47.33px;
  justify-content: center;
  box-sizing: border-box;
  height: calc(100vh - 47.33px - 260px);
  padding: 300px 0;
  max-width: 100%;
  background-color: var(--black-050);
`;

const SignInContainer = styled(DivCom)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1264px;
  min-width: 1200px;

  margin: 0;
  padding: 24px;
  background-color: transparent;
  border-left: 0;
  border-right: 0;
  box-sizing: inherit;
  vertical-align: baseline;

  // Aouth button container
  .SIbuttonContainer {
    display: flex;
    flex-direction: column;
    max-width: 278px;
    margin: -4px 0 16px;
  }
  .SIFormContainer {
    margin: 0 0 24px;
    padding: 24px;
    width: 278px;
    height: 234px;
    background-color: white;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    border-radius: 7px;
  }
  .imageContainer {
    margin: 0 0 24px;
  }

  .Links {
    display: flex;
    flex-direction: column;
    margin: 0 0 24px;
    font-size: 13px;
  }
`;

// Aouth button
const SIAouthButton = styled(ButtonCom)`
  margin: 4px 0;
  width: 278px;
`;

const SignInForm = styled(FormCom)`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;
  height: 198px;

  .SIEmail,
  .SIPassword {
    display: flex;
    flex-direction: column;
    margin: 6px 0;
  }

  #SILabelEmail,
  #SILabelPW {
    margin: 0 2px;
    padding: 2px 2px;
  }

  #SIInputE,
  #SIInputP {
    padding: 8px 8px;
    max-height: 32px;
    border: 1px solid var(--black-200);
    border-radius: 3px;

    &:focus {
      box-shadow: 0 0 0 4px hsla(206, 100%, 40%, 0.15);
      outline: none;
    }
  }
`;

// Sign in Button
const SignInButton = styled(ButtonCom)`
  margin: 16px 0;
  font-size: 13px;

  &:hover {
    background-color: var(--blue-600);
  }
`;

function SignIn() {
  return (
    <BackContainer>
      <SignInContainer>
        {/* section #1: image container */}
        <DivCom className="imageContainer">
          <a href="http://localhost:3000/home">
            <img className="logo1" src={logo1} width={'32'} height={'37'}></img>
          </a>
        </DivCom>
        {/* section #2: Aouth buttons */}
        <div className="SIbuttonContainer">
          <SIAouthButton
            id="google"
            bgcolor="white"
            paddings="10px"
            radius="5px"
          >
            Sign up with Google
          </SIAouthButton>
          <SIAouthButton
            id="github"
            bgcolor="var(--black-750)"
            paddings="10px"
            radius="5px"
            color="white"
          >
            Sign up with GitHub
          </SIAouthButton>
          <SIAouthButton
            id="facebook"
            bgcolor="#385499"
            paddings="10px"
            radius="5px"
            color="white"
          >
            Sign up with Facebook
          </SIAouthButton>
        </div>
        {/* section #3: Inputs */}
        <div className="SIFormContainer">
          <SignInForm>
            {/* SECTION #3-1 E-mail*/}
            <div className="SIEmail">
              <label id="SILabelEmail" htmlFor="SIEmail">
                Email
              </label>
              <input id="SIInputE" name="SIEmail" type="text"></input>
            </div>
            {/* SECTION #3-2 PW */}
            <div className="SIPassword">
              <label id="SILabelPW" htmlFor="SIPassword">
                Password
              </label>
              <input id="SIInputP" name="SIPassword" type="password"></input>
            </div>
            {/* SECTION #3-3 Sign in button */}
            <SignInButton
              bgcolor="var(--blue-500)"
              paddings="10px"
              radius="5px"
              color="white"
            >
              Sign in
            </SignInButton>
          </SignInForm>
        </div>
        {/* section #4: Links */}
        <DivCom className="Links" paddings="16px">
          <DivCom className="MakeAccount">
            Don’t have an account?
            <a href="http://localhost:3000/signup"> Sign up</a>
          </DivCom>
          <DivCom className="Employer">
            Are you employer?{' '}
            <a href="https://talent.stackoverflow.com/users/login">
              Sign up on Talent
            </a>
          </DivCom>
        </DivCom>
      </SignInContainer>
    </BackContainer>
  );
}

export default SignIn;
