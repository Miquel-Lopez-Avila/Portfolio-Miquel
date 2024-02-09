import styled, { css, keyframes } from 'styled-components';
import { changeThemeTime } from '../../../../../application/config/variables';

const moonrise = keyframes`
  0% {
    box-shadow: none;
  }
`;

const rays = keyframes`
  0% {
    box-shadow: 0 0 0 0 #f5f5f580,
    0 0 0 10px #f5f5f580,
    0 0 0 20px #f5f5f540,
    0 0 0 30px #f5f5f520,
    0 0 0 40px #f5f5f510,
    0 0 20px 50px #f5f5f510;
  }
  100% {
    box-shadow: 0 0 0 10px #f5f5f580,
    0 0 0 20px #f5f5f540,
    0 0 0 30px #f5f5f520,
    0 0 0 40px #f5f5f510,
    0 0 0 50px #f5f5f500,
    0 0 20px 50px #f5f5f510;
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

export const MoonStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 50%;
  animation: ${moonrise} ${changeThemeTime}s infinite linear forwards;

  &:after {
    position: absolute;
    content: "";
    background-color: #e6e6e6;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 76%;
    left: 20%;
    box-shadow: 0.9px -23.1px 0 0.2em #e6e6e6, 1.5em -0.3em 0 -0.06em #e6e6e6;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  box-shadow: 0px 0px 12px 0px rgba(245,245,245,1);
  z-index: 2;
  width: 100%;
  border-radius: 50%;
  height: 100%;
  animation: ${onMount} ${changeThemeTime}s;
  ${({ unMountCurrentTheme }) => (unMountCurrentTheme ? unMountAnimation : onMountAnimation)};
`;
