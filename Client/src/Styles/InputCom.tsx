import styled from 'styled-components';

interface Inputprops {
  size?: string;
  maxl?: string;
}

const InputCom = styled.input<Inputprops>`
  font: unset;
  font-size: 100%;
  size: ${(props) => props.size}
  maxlength: ${(props) => props.maxl}
`;

export default InputCom;
