import styled from 'styled-components';

const DivCom = styled.div<{ paddings?: string }>`
  display: flex;
  padding: ${(props) => props.paddings};
  justify-content: center;
  align-items: center;
  font: unset;
`;

export default DivCom;
