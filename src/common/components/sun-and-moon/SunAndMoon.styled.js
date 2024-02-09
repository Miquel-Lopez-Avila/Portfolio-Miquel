import styled, { css, keyframes } from 'styled-components';
import { changeThemeTime } from '../../../application/config/variables';
import { lightTheme } from '../../../application/config/theme';
import { device } from '../../../application/style/breakpoint';
import Icon from '../icon';

export const Wrapper = styled.div`
  position: fixed;
  width: 350px;
  height: 350px;
  transform: translate(-50%, -50%);
  top: 0;
  left: 100%;
  z-index: 9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerClickable = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
  pointer-events: ${({ canChangeTheme }) => canChangeTheme.value ? 'unset' : 'none'};
  cursor: ${({ canChangeTheme }) => canChangeTheme.value ? 'pointer' : 'unset'};
  border-radius: 50%;
  z-index: 10;
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

const onMountAnimationFromLeft = css`
  animation: ${onMountFromLeft} ${changeThemeTime}s;
`;

const onMountAnimationFromRight = css`
  animation: ${onMountFromRight} ${changeThemeTime}s;
`;

const unMountAnimationToLeft = css`
  animation: ${unMountToLeft} ${changeThemeTime}s linear forwards;
`;

const unMountAnimationToRight = css`
  animation: ${unMountToRight} ${changeThemeTime}s linear forwards;
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

const onMountBirds = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`;

const unMountBirds = keyframes`
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0;
  }
`;

const onMountBirdsAnimation = css`
  animation: ${onMountBirds} ${changeThemeTime}s forwards;
`;

const unMountBirdsAnimation = css`
  animation: ${unMountBirds} ${changeThemeTime}s forwards;
`;

export const Birds = styled(Icon)`
  object-fit: cover;
  position: absolute;
  display: none;
  pointer-events: none;
  z-index: ${({ index }) => index && index};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  ${({ theme }) => theme === lightTheme ? onMountBirdsAnimation : unMountBirdsAnimation};

  @media ${device.tablet} {
    display: block;
  }
`;
