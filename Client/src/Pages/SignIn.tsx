import axios from 'axios';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo1 from '../assets/stacklogo.png';
import ButtonCom from '../Styles/ButtonCom';
import DivCom from '../Styles/DivCom';
import FormCom from '../Styles/FormCom';

const BackContainer = styled(DivCom)`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  /* margin-top: 47.33px; */
  justify-content: center;
  box-sizing: border-box;
  height: calc(100vh - 47.33px);
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
  /* 유효성 검사 */
  .invalid {
    font-size: 13px;
    color: red;
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

/** 함수 컴포넌트 시작 */
function SignIn() {
  /** usenavigate */
  const navigation = useNavigate();

  /** 로그인 정보 객체 및 인풋창 상태관리 */
  const [signInInfo, setSignInInfo] = useState({
    username: '',
    password: '',
  });
  const [idValid, setidValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [signInMSG, setSignInMSG] = useState('');

  /** email,password 유효성 검사 정규식 */
  const regExid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regExpw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;

  /** email 값 설정 및 유효성검사 */
  const handleIdValue = (e: any) => {
    setSignInInfo({ ...signInInfo, username: e.target.value });
    if (regExid.test(e.target.value) || e.target.value === '') {
      setidValid(true);
    } else {
      setidValid(false);
    }
  };
  /** password 값 설정 및 유효성검사 */
  const handlePasswordValue = (e: any) => {
    setSignInInfo({ ...signInInfo, password: e.target.value });
    if (regExpw.test(e.target.value) || e.target.value === '') {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  /** 로그인 버튼 누를 시 작동하는 함수 */
  const handleSignIn: React.MouseEventHandler = async (
    event: React.MouseEvent,
  ) => {
    /** axios 보내기 전에 유효성 검사 */
    if (!idValid || !passwordValid) {
      setSignInMSG('invalid email address or password');
      console.log(signInMSG);
      localStorage.setItem('invalidMSG', 'invalid email address or password');
      return console.log('Invalid');
    }

    event.preventDefault();

    /** 통과시 post 요청 */
    try {
      await axios
        .post(
          `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/auths/login`,
          signInInfo,
        )
        .then((response) => {
          // 구조분해할당으로 하나로 합칠 수 있는지 확인 필요
          console.log(response.headers);
          const memberId = response.headers.memberid;
          const displayName = response.headers.displayname;
          const accessToken = response.headers.authorization;

          alert(`Welcome back!`);
          //  signin 성공시 memberId,displayname,토큰 로컬에 저장.
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('memberId', JSON.stringify(memberId));
          localStorage.setItem('displayName', JSON.stringify(displayName));
          // localStorage.removeItem('invalidMSG');
          window.location.reload();
          navigation('/api/questions');
        });
    } catch (error: unknown | any) {
      console.log(error.response.data);
      navigation('/error');
    }
    return console.log('never');
  };

  return (
    <BackContainer>
      {/* Signin Container 4개의 section으로 구분 */}
      <SignInContainer>
        {/* section #1: image container */}
        <DivCom className="imageContainer">
          <a href="http://localhost:3000/">
            <img alt="" className="logo1" src={logo1} width="32" height="37" />
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
            Sign in with Facebook
          </SIAouthButton>
        </div>
        <div className="SIFormContainer">
          <SignInForm>
            <div className="SIEmail">
              <label id="SILabelEmail" htmlFor="SIEmail">
                Email
              </label>
              <input
                id="SIInputE"
                name="SIEmail"
                type="text"
                onChange={handleIdValue}
              />
            </div>
            {/* 유효성 검사 탈락 메세지 */}
            <div className="invalid">{localStorage.getItem('invalidMSG')}</div>
            {/* SECTION #3-2 PW */}
            <div className="SIPassword">
              <label id="SILabelPW" htmlFor="SIPassword">
                Password
              </label>
              <input
                id="SIInputP"
                name="SIPassword"
                type="password"
                onChange={handlePasswordValue}
              />
            </div>
            {/* SECTION #3-3 Sign in button */}
            <SignInButton
              bgcolor="var(--blue-500)"
              paddings="10px"
              radius="5px"
              color="white"
              onClick={handleSignIn}
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
