import styled from 'styled-components';

import DivCom from '../Styles/DivCom';
import FormCom from '../Styles/FormCom';

const SignUpForm = styled(FormCom)`
  display: block;
  max-width: calc((97.23rem / 12) * 3);
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

function SignUp() {
  return (
    <DivCom>
      <DivCom />
      <SignUpForm paddings="24px" />
    </DivCom>
  );
}

export default SignUp;
