import styled from 'styled-components';

interface Formprops {
  paddings?: string;
  radius?: string;
}

const FormCom = styled.form<Formprops>`
  padding: ${(props) => props.paddings};
  border-radius: ${(props) => props.radius};
`;

export default FormCom;
