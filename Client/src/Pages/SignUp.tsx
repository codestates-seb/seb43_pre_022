import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { RootState } from '../store/store';
import ButtonCom from '../Styles/ButtonCom';
import DivCom from '../Styles/DivCom';
import FormCom from '../Styles/FormCom';

const BackContainer = styled(DivCom)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 31.33px);
  max-width: 100%;

  padding-top: 50px;

  background-color: var(--black-050);
`;

const SignUpContainer = styled(DivCom)`
  width: 100%;
  max-width: 1264px;
  margin: 0;

  // left part
  .left {
    display: flex;
    flex-direction: column;
    width: 421px;
    height: 300px;
    margin: 0 48px 128px 0;
  }

  .lefthead {
    margin: 0 0 32px 0;
    font-size: 27px;
  }
  .SVGContainer {
    margin: 0;
    width: 26px;
  }

  .SVGContainer svg {
    width: 26px;
    height: 26px;
  }

  .LeftItemContainer {
    display: flex;
    margin: 0;
  }
  .LeftItembottom {
    font-size: 13px;
  }

  // right part
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .buttonContainer {
    display: flex;
    flex-direction: column;
    max-width: 316px;
    margin: -4px 0 16px;
  }

  .SignUpFormContainer {
    margin: 0 0 24px;
    padding: 24px;
    width: 316px;
    height: 600px;
    background-color: white;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    border-radius: 7px;
  }

  // 입력창들 정렬 및 마진,패딩조절
  .SUDisplayname,
  .SUEmail,
  .SUPassword {
    display: flex;
    flex-direction: column;
    margin: 6px 0;
  }
  #SULabelDisplayname,
  #SULabelEmail,
  #SULabelPW {
    margin: 0 2px;
    padding: 2px 0;
  }
  #SUInputD,
  #SUInputE,
  #SUInputP {
    padding: 8px 8px;
    max-height: 32px;
    border: 1px solid var(--black-200);
    border-radius: 3px;
    &:focus {
      box-shadow: 0 0 0 4px hsla(206, 100%, 40%, 0.15);
      outline: none;
    }
  }
  #passwordTerm {
    font-size: 12px;
  }

  // rechapcha
  .reCAPTCHA {
    width: 268px;
    height: 150px;
    background-color: var(--black-050);
    margin: 6px 0;
    padding: 8px 0 2px;
  }
  // opt-in
  .Opt-inContainer {
    font-size: 13px;
  }
  // termsofservice
  .termsofservice {
    margin: 32px 0 0;
    font-size: 12px;
    color: hsl(210, 8%, 45%);
  }
  // transport
  .transportcontainer {
    padding: 16px;
    margin-bottom: 24px;
    font-size: 13px;
    flex-direction: column;
    .gosignin {
    }
    .movetosignin,
    .movetoTsignin {
      margin-left: 13px;
      &:link {
        color: blue;
      }
    }
  }
`;

const LeftItems = styled(DivCom)`
  margin: 0 0 24px 0;
  font-size: 15px;
  white-space: nowrap;
`;

const SignUpForm = styled(FormCom)`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;
  height: 500px;

  // email validation
  .emailinvalid {
    font-size: 13px;
    padding-top: 5px;
    color: red;
  }
  // password validation
  .pwinvalid {
    color: red;
    padding-top: 5px;
  }
`;

// Aouth Buttons
const AouthButton = styled(ButtonCom)`
  margin: 4px 0;
  width: 316px;
`;
// Sign up Button
const SignUpButton = styled(ButtonCom)`
  margin: 2px 0;
  font-size: 13px;

  &:hover {
    background-color: var(--blue-700);
  }
`;

/** 함수 컴포넌트 시작 */
function SignUp() {
  /** Usenavigate */
  const navigation = useNavigate();

  //  redux toolkit - pending
  //  state 하나씩 console.log 찍어보면 구조 확인 가능
  //  아까 선언한 RootState로 type 에러를 잡아줌.
  const isLogin = useSelector(
    (state: RootState) => state.loginInfoReducer.login,
  );

  const dispatch = useDispatch();

  /** ID,PW */
  const [signUpInfo, setSignUpInfo] = useState({
    displayName: '',
    email: '',
    password: '',
  });
  const [idValid, setidValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailMSG, setEmailMSG] = useState('');
  const [passwordMSG, setPasswordMSG] = useState('');

  /** email,password 유효성 검사 정규식 */
  const regExid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regExpw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;

  /** displayName 값 설정 */
  const handleNameValue = (e: any) => {
    setSignUpInfo({ ...signUpInfo, displayName: e.target.value });
  };
  /** email 값 설정 및 유효성검사 */
  const handleIdValue = (e: any) => {
    setSignUpInfo({ ...signUpInfo, email: e.target.value });
    if (regExid.test(e.target.value) || e.target.value === '') {
      setidValid(true);
      setEmailMSG('');
    } else {
      setidValid(false);
      setEmailMSG('invalid email address');
    }
  };
  /** password 값 설정 및 유효성검사 */
  const handlePasswordValue = (e: any) => {
    setSignUpInfo({ ...signUpInfo, password: e.target.value });
    if (regExpw.test(e.target.value) || e.target.value === '') {
      setPasswordMSG(
        'Passwords must contain at least eight characters, including at least 1 letter and 1 number.',
      );
      setPasswordValid(true);
    } else {
      setPasswordMSG(
        'Passwords must contain at least eight characters, including at least 1 letter and 1 number.',
      );
      setPasswordValid(false);
    }
  };

  /** 회원가입 버튼 누를 시 작동하는 함수 */
  /* 네트워크에 get 요청이 기본작동되는 것 같아 e.preventDefault 추가함 */
  const handleSignUp: React.MouseEventHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await fetch(
        ` http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/members`,
        {
          method: 'POST',
          body: JSON.stringify(signUpInfo),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then(response => {
        alert('you successfully signed up!');
        navigation('/signin');
      });
    } catch (error) {
      /** 중복인 경우와 다른이유로 실패한 경우 삼항으로 구분 */
      console.log(error);
      alert('you failed to signup!');
      navigation('/error');
    }
  };

  return (
    <BackContainer>
      {/* Signup left,right로 구분 */}
      <SignUpContainer>
        {/* 왼쪽 부분 */}
        <div className="left">
          <h1 className="lefthead">Join the Stack Overflow community</h1>
          <div className="LeftItemsOutContainer">
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <LeftItems>Get unstuck — ask a question</LeftItems>
            </div>
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <LeftItems>
                Unlock new privileges like voting and commenting
              </LeftItems>
            </div>
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <LeftItems>
                Save your favorite questions, answers, watch tags, and more
              </LeftItems>
            </div>
            <div className="LeftItemContainer">
              <div className="SVGContainer">
                <svg />
              </div>
              <LeftItems>Earn reputation and badges</LeftItems>
            </div>
            <div className="LeftItembottom">
              Collaborate and share knowledge with a private group for FREE.
              <br />
              <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
                Get Stack Overflow for Teams free for up to 50 users.
              </a>
            </div>
          </div>
        </div>
        {/* 오른쪽 부분 */}
        <div className="right">
          <div className="buttonContainer">
            <AouthButton
              id="google"
              bgcolor="white"
              paddings="10px"
              radius="5px"
            >
              Sign up with Google
            </AouthButton>
            <AouthButton
              id="github"
              bgcolor="var(--black-750)"
              paddings="10px"
              radius="5px"
              color="white"
            >
              Sign up with GitHub
            </AouthButton>
            <AouthButton
              id="facebook"
              bgcolor="#385499"
              paddings="10px"
              radius="5px"
              color="white"
            >
              Sign up with Facebook
            </AouthButton>
          </div>
          <div className="SignUpFormContainer">
            {/* SignUpForm 6단분리 */}
            <SignUpForm>
              {/* SECTION #1 DisplayName  */}
              <div className="SUDisplayname">
                <label id="SULabelDisplayname" htmlFor="SUDisplayname">
                  Display name
                </label>
                <input
                  id="SUInputD"
                  name="SUDisplayname"
                  type="text"
                  onChange={handleNameValue}
                />
              </div>
              {/* SECTION #2 E-mail */}
              <div className="SUEmail">
                <label id="SULabelEmail" htmlFor="SUEmail">
                  Email
                </label>
                <input
                  id="SUInputE"
                  name="SUEmail"
                  type="text"
                  onChange={handleIdValue}
                />
                {/* email validation MSG 출력 */}
                <div className="emailinvalid">{emailMSG}</div>
              </div>
              {/* SECTION #3 PW */}
              <div className="SUPassword">
                <label id="SULabelPW" htmlFor="SUPassword">
                  Password
                </label>
                <input
                  id="SUInputP"
                  name="SUPassword"
                  type="password"
                  onChange={handlePasswordValue}
                />
                {/** password validation MSG 나중에 조금 더 세분화해서  */}
                <p
                  id="passwordTerm"
                  className={passwordValid ? 'pwvalid' : 'pwinvalid'}
                  placeholder="Passwords must contain at least eight characters, including at
                least 1 letter and 1 number."
                >
                  {passwordMSG}
                </p>
              </div>
              {/* SECTION #4 I'm not a robot */}
              <div className="reCAPTCHA" />
              {/* SECTION #5 Opt-in */}
              <div className="Opt-inContainer">
                <input id="SUcheckbox" name="SUcheckbox" type="checkbox" />
                <label id="SUOptlabel" htmlFor="SUcheckbox">
                  Opt-in to receive occasional product updates, user research
                  invitations, company announcements, and digests.
                </label>
              </div>
              {/* SECTION #6 Sign up button */}
              <SignUpButton
                bgcolor="var(--blue-600)"
                paddings="10px"
                radius="5px"
                color="white"
                onClick={handleSignUp}
              >
                Sign up
              </SignUpButton>
            </SignUpForm>
            <DivCom className="termsofservice">
              By clicking “Sign up”, you agree to our terms of service, privacy
              policy and cookie policy
            </DivCom>
          </div>
          <DivCom className="transportcontainer">
            <DivCom className="gosignin">
              Already have an account?
              <a href="/signin" className="movetosignin">
                Log in
              </a>
            </DivCom>
            <DivCom className="talentedsignin">
              Are you an employer?
              <a
                href="https://talent.stackoverflow.com/users/login"
                className="movetoTsignin"
              >
                Sign up on Talent
              </a>
            </DivCom>
          </DivCom>
        </div>
      </SignUpContainer>
    </BackContainer>
  );
}

export default SignUp;
