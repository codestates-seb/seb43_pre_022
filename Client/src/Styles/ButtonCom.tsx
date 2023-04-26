import styled from 'styled-components';

interface Buttonprops {
  paddings?: string;
  radius?: string;
  bgcolor?: string;
  color?: string;
}

const ButtonCom = styled.button<Buttonprops>`
  border-style: none;
  border-radius: ${props => props.radius || '3px'};
  padding: ${props => props.paddings};
  background-color: ${props => props.bgcolor || 'transparent'};
  color: ${props => props.color || 'black'};
`;

export default ButtonCom;
