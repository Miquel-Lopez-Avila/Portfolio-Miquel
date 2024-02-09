import styled, { css, keyframes } from 'styled-components';
import { lightTheme } from '../../../application/config/theme';
import { device } from '../../../application/style/breakpoint';
import { changeThemeTimeInitialLoader } from '../../../application/config/variables';
import Icon from '../icon';

const transparency = keyframes`
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 13;
  top: 0;
  left: 0;
  pointer-events: none;
  height: 100%;
  background-color: #072142;
  animation: ${transparency} 6s forwards;
`;

const rain = keyframes`
  from {
    left: ${Math.random()} * ${window.innerWidth};
  }
  to {
    left: ${Math.random()} * ${window.innerWidth};
    top: 100%;
  }
`;

export const RaindropContainer = styled.div`
  & > .raindrop {
    position: fixed;
    top: -50px;
    width: 2px;
    height: 30px;
    background-color: #D3D3D3;
    animation: ${rain} 0.4s linear infinite;
    opacity: 0.2;
    z-index: -2;
  }
`;

const unMountToLeft = keyframes`
  0% {
    transform: translateX(0);
    opacity: 100%;
  }
  100% {
    transform: translateX(-20px);
    opacity: 0;
  }
`;

const unMountToRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 100%;
  }
  100% {
    transform: translateX(20px);
    opacity: 0;
  }
`;

const onMountFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
    opacity: 100%;
  }
`;

const onMountFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
    opacity: 100%;
  }
`;

const unMountAnimationToRight = css`
  animation: ${unMountToRight} ${changeThemeTimeInitialLoader}s linear forwards;
`;

const unMountAnimationToLeft = css`
  animation: ${unMountToLeft} ${changeThemeTimeInitialLoader}s linear forwards;
`;

const onMountAnimationFromRight = css`
  animation: ${onMountFromRight} ${changeThemeTimeInitialLoader}s;
`;

const onMountAnimationFromLeft = css`
  animation: ${onMountFromLeft} ${changeThemeTimeInitialLoader}s;
`;

const clipPath = css`
  clip-path: polygon(0 0, 100% 0%, 100% 66%, 0 66%);
`;

export const Cloud = styled(Icon)`
  object-fit: cover;
  position: absolute;
  pointer-events: none;
  display: none;
  z-index: ${({ index }) => index && index};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  ${({ theme, isLeft }) => theme !== lightTheme ? (isLeft ? unMountAnimationToLeft : unMountAnimationToRight) : (isLeft ? onMountAnimationFromRight : onMountAnimationFromLeft)};
  ${({ addClipPath }) => addClipPath && clipPath}

  @media ${device.tablet} {
    display: block;
  }
`;
