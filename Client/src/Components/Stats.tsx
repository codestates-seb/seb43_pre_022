import styled from 'styled-components';

import DivCom from '../Styles/DivCom';

const StatDiv = styled(DivCom)`
  .stats {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .stat-title {
    margin: 0 0 8px;
    font-size: 21px;
  }
  .stat-box {
    display: flex;
    border-radius: 5px;
    border: 0.2px solid hsl(210, 8%, 85%);
    flex-wrap: wrap !important;
    flex-basis: calc(250px);
    .stat {
      flex: 1 0 auto;
      margin: 8px;
      flex-basis: calc(100px);
      flex-direction: column;
      align-items: flex-start;
    }
    .statnum {
      font-size: 17px;
    }
    .statname {
      font-size: 13px;
    }
  }
`;

function Stats() {
  return (
    <StatDiv>
      <DivCom className="stats">
        <DivCom className="stat-title">Stats</DivCom>
        <DivCom className="stat-box">
          <DivCom className="stat">
            <DivCom className="statnum">1</DivCom>
            <DivCom className="statname">reputation</DivCom>
          </DivCom>
          <DivCom className="stat">
            <DivCom className="statnum">0</DivCom>
            <DivCom className="statname">reached</DivCom>
          </DivCom>
          <DivCom className="stat">
            <DivCom className="statnum">0</DivCom>
            <DivCom className="statname">answer</DivCom>
          </DivCom>
          <DivCom className="stat">
            <DivCom className="statnum">0</DivCom>
            <DivCom className="statname">questions</DivCom>
          </DivCom>
        </DivCom>
      </DivCom>
    </StatDiv>
  );
}

export default Stats;
