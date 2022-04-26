import { createGlobalStyle } from 'styled-components';

const CssBaseLine = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    color: inherit;
    font-family: inherit;
    box-sizing: border-box;
  }

  body {
    font-size: .875rem;
    text-align: left;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.background};
    transition: background-color 150ms linear, color 150ms linear;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  input, button {
    font-size: inherit;
    line-height: 36px;
  }
`;

export default CssBaseLine;
