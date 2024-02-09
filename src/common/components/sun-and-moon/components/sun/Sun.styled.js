import styled, { keyframes, css } from 'styled-components';
import { changeThemeTime } from '../../../../../application/config/variables';

const sunrise = keyframes`
  0% {
    box-shadow: none;
  }
`;

const onMount = keyframes`
  0% {
    transform: translate(110px, 110px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const unMount = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-110px, -110px);
  }
`;

const onMountAnimation = css`
  animation: ${onMount} ${changeThemeTime}s forwards;
`;

const unMountAnimation = css`
  animation: ${unMount} ${changeThemeTime}s forwards;
`;

export const SunStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFDE00;
  border-radius: 50%;
  animation: ${sunrise} ${changeThemeTime}s infinite linear forwards;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  box-shadow: 0px 0px 12px 0px rgba(255,222,0,1);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  ${({ unMountCurrentTheme }) => (unMountCurrentTheme ? unMountAnimation : onMountAnimation)};
`;
