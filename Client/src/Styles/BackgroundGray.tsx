import { createGlobalStyle } from 'styled-components';

const BackgroundGray = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #f1f2f3;
  }
`;

export default BackgroundGray;
