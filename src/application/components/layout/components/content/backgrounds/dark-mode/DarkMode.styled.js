import styled, { keyframes } from 'styled-components';
import { device } from '../../../../../../style/breakpoint';
import { changeThemeTime } from '../../../../../../config/variables';

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
  z-index: 2;
  opacity: ${({ isFirstTheme }) => isFirstTheme ? 0 : 1};
  animation: ${({ isFirstTheme, isLightMode }) => {
    if (!isFirstTheme) {
      return isLightMode ? transparency : visible;
    }
    return null;
  }} ${changeThemeTime}s forwards;

  @media ${device.tablet} {
    height: 100vh;
  }
`;

const tail = keyframes`
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
`;

const shining = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
`;
const sky = keyframes`
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
`;
const shooting = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
`;

export const StarsContainer = styled.div`
  position: relative;
  transform: rotateZ(45deg);
  width: 100%;
  height: 100%;

  & > .shooting-star {
  position: absolute;
  z-index: 90;
  left: ${({ left }) => left && `${left}px`};
  top: ${({ top }) => top && `${top}px`};
  height: 2px;
  background: linear-gradient(-45deg, rgb(255, 255, 255), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgb(255, 255, 255));
  animation: ${tail} 3000ms ease-in-out infinite, ${shooting} 3000ms ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgb(255, 255, 255), rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: ${shining} 3000ms ease-in-out infinite;
  }
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgb(255, 255, 255), rgba(0, 0, 255, 0));
    border-radius: 100%;
    animation: ${shining} 3000ms ease-in-out infinite;
    transform: translateX(50%) rotateZ(-45deg);
  }
  }
`;

export const ShootingStar = styled.div`

`;
