import { css } from 'styled-components';
import { device } from '../breakpoint';

export const appGlobals = css`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-weight: 400;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
    background-color: ${({ theme }) => theme.sideBarColor};
    position: relative;
    color: ${({ theme }) => theme.letteringColor};
    overflow-x: hidden;

    @media ${device.tablet} {
      overflow: hidden;
    }
  }

  .title {
    font-family: "Red Hat Display", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
  }

  .a_star{
    transition-duration: 1s;
  }
`;
