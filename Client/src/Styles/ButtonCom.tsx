import styled from 'styled-components';

const ButtonCom = styled.button<{ radius?: number }>`
  border-style: none;
  border-radius: ${(props) => props.radius || '3px'};
`;

export default ButtonCom;
