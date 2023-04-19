import styled from 'styled-components';

interface Buttonprops {
  paddings?: string;
  radius?: string;
}

const ButtonCom = styled.button<Buttonprops>`
  border-style: none;
  border-radius: ${(props) => props.radius || '3px'};
  padding: ${(props) => props.paddings};
`;

export default ButtonCom;
