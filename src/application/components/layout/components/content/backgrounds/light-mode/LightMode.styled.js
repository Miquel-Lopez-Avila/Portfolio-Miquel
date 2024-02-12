import styled, { css, keyframes } from 'styled-components';
import { device } from '../../../../../../style/breakpoint';
import { changeThemeTime } from '../../../../../../config/variables';
import { lightTheme } from "../../../../../../config/theme";

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

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px 0 0 50px;
  padding: 20px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: ${({ isFirstTheme }) => isFirstTheme ? 1 : 0};
  animation: ${({ isFirstTheme, isLightMode }) => {
    if (!isFirstTheme) {
      return isLightMode ? visible : transparency;
    }
    return null;
  }} ${changeThemeTime}s forwards;

  @media ${device.tablet} {
    height: 100vh;
  }
`;

const displacement = keyframes`
  0% {
    transform: translateX(-50px);
  }
  100%{
    display: none;
    transform: translateX(105vw);
  }
`;

export const ContainerPlane = styled.div`
  position: absolute;
  z-index: 10;
  left: ${({ left }) => left && `${left}%`};
  top: ${({ top }) => top && `${top}px`};
`;

export const Plane = styled.img`
  width: 50px;
  animation: ${displacement} 30s infinite;
`;

const transparencyRainbow = keyframes`
  from {
    opacity: 0.1;
  } to {
    opacity: 0;
  }
`;

const visibleRainbow = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 0.1;
  }
`;

export const RainbowAnimation = css`
  animation: ${({ isLightMode }) => {
    return isLightMode ? visibleRainbow : transparencyRainbow;
  }} ${changeThemeTime}s forwards;
`;

export const Rainbow = styled.div`
  width: 170%;
  aspect-ratio: 1;
  z-index: 3;
  clip-path: polygon(0 0, 100% 64%, 100% 0);
  border-radius: 100%;
  box-shadow: 0px 0px 0px 20px #fdd9ff, 0px 0px 0px 40px #c6abff, 0px 0px 0px 60px #6ea6f5, 0px 0px 0px 80px #79d991, 0px 0px 0px 100px #fff47d, 0px 0px 0px 120px orange, 0px 0px 0px 140px red;
  position: absolute;
  opacity: 0;
  ${({ isLightMode }) => isLightMode && RainbowAnimation};
  top: 0;
  left: -55%;
`;
