import '../Global.css';

import styled from 'styled-components';

export const Div = styled.div`
  font-size: 13px;
  margin: 15px 0px;
  .section {
    margin-right: 10px;
    span {
      margin-right: 5px;
      color: var(--fc-light);
    }
  }
`;
function Asked() {
  return (
    <Div>
      <span className="section">
        <span>Asked</span>today
      </span>
      <span className="section">
        <span>Modified</span>today
      </span>
      <span className="section">
        <span>Viewed</span>6 times
      </span>
    </Div>
  );
}

export default Asked;
