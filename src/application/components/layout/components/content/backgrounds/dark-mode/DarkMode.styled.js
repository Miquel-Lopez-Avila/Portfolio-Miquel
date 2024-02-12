import styled, {css, keyframes} from 'styled-components';
import { device } from '../../../../../../style/breakpoint';
import { changeThemeTime } from '../../../../../../config/variables';
import lightMode from "../light-mode";
import { darkTheme } from "../../../../../../config/theme";

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

const tranistion = css`
    opacity: ${({ isFirstTheme }) => isFirstTheme ? 0 : 1};
    animation: ${({ isFirstTheme, isLightMode }) => {
        if (!isFirstTheme) {
            return isLightMode ? transparency : visible;
        }
        return null;
    }} ${changeThemeTime}s forwards;
`;

const opacity = css`
    opacity: 1;
`;

const noOpacity = css`
    opacity: 0;
`;

const fixedTest = css`
    animation: ${({ isFirstTheme, isLightMode }) => {
        if (!isFirstTheme) {
            return isLightMode ? transparency : visible;
        }
        return null;
    }} ${changeThemeTime}s forwards;
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
    ${({
           isContentBackground,
           addTransition,
           theme
       }) => isContentBackground ? tranistion : (addTransition && theme !== lightMode) ? fixedTest : noOpacity}
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
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform: rotateZ(45deg);

  & > .shooting-star {
  position: absolute;
  z-index: 90;
  left: ${({ left }) => left && `${left}px`};
  top: ${({ top }) => top && `${top}px`};
  height: 2px;
  background: linear-gradient(-45deg, rgb(255, 255, 255), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgb(255, 255, 255));
  animation: ${({ removeTailAnimation, time }) => !removeTailAnimation && css`${tail} ${time}ms ease-in-out infinite, ${shooting} ${time}ms ease-in-out infinite}`};

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgb(255, 255, 255), rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: ${({ time, removeHead }) =>  !removeHead && css`${shining} ${time}ms ease-in-out infinite`};
  }
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgb(255, 255, 255), rgba(0, 0, 255, 0));
    border-radius: 100%;
    animation: ${({ time, removeHead }) => !removeHead && css`${shining} ${time}ms ease-in-out infinite`};
    transform: translateX(50%) rotateZ(-45deg);
  }
  }
`;

export const ShootingStar = styled.div`

`;
