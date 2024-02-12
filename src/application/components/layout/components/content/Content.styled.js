import styled, { keyframes, css } from 'styled-components';
import { device } from '../../../../style/breakpoint';
import { changeThemeTime } from '../../../../config/variables';

const opacityBefore = css`
  &::before {
    opacity: 1;
  }
`;

const transparency = keyframes`
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

const visible = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const ContentStyle = styled.div`
  width: 100%;
  border-radius: 50px 50px 0px 0px;
  margin-bottom: 70.2px;
  z-index: 2;
  overflow: hidden;
  background-color: ${({ theme }) => theme.limitsNavbarColor};
  transition: background-color ${changeThemeTime}s linear;
  position: relative;
    
  @media ${device.tablet} {
    margin-bottom: 0;
    height: 100vh;
    border-radius: 50px 0 0 50px;
  }
`;

export const Wrapper = styled.div`
    border-radius: 50px 50px 0px 0px;
`;
