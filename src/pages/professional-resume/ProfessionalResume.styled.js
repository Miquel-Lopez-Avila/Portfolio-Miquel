import styled, { css, keyframes } from 'styled-components';
import { changeThemeTime } from '../../application/config/variables';
import { device } from '../../application/style/breakpoint';

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  background: transparent;
  display: ${({ showView }) => showView ? 'block' : 'none'};
  padding: 40px 30px 30px 30px;

  @media ${device.tablet} {
    padding: 40px 60px 20px 40px;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  height: 40px;
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

export const PageTitleDay = styled.h1`
  margin-bottom: 40px;
  top: 0;
  left: 0;
  position: absolute;
  ${({ themeChanged, isLightMode }) => themeChanged ? animationNightToDay : (isLightMode ? visibleOpacity : invisibleOpacity)}

`;

const animationDayToNight = css`
  animation: ${({ isFirstTheme, isLightMode }) => {
    if (!isFirstTheme) {
      return !isLightMode ? visible : transparency;
    }
    return null;
  }} ${changeThemeTime}s forwards;
`;

const animationNightToDay = css`
  animation: ${({ isFirstTheme, isLightMode }) => {
    if (!isFirstTheme) {
      return isLightMode ? visible : transparency;
    }
    return null;
  }} ${changeThemeTime}s forwards;
`;

const visibleOpacity = css`
  opacity: 1;
`;

const invisibleOpacity = css`
  opacity: 0;
`;

export const PageTitleNight = styled.h1`
  margin-bottom: 40px;
  top: 0;
  left: 0;
  position: absolute;
  ${({ themeChanged, isLightMode }) => themeChanged ? animationDayToNight : (isLightMode ? invisibleOpacity : visibleOpacity)}
`;

export const Color = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  transition: color ${changeThemeTime}s;
  text-align: center;

    & > * {
      white-space: nowrap;
    }
`;

export const ContainerConstellation = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  height: 650px;
  ${({ themeChanged, isLightMode }) => themeChanged ? animationDayToNight : (isLightMode ? invisibleOpacity : visibleOpacity)}
  align-items: center;

  @media ${device.tablet} {
    align-items: unset;
  }

  @media ${device.laptop} {
    justify-content: start;
  }

  @media ${device.desktop} {
    justify-content: space-evenly;
  }
`;

export const StarConstellation = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  z-index: 11;
  left: ${({ left }) => left && `${left}px`};
  top: ${({ top }) => top && `${top}px`};
  background-color: rgba(255,255,255, 0.9);
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(255,255,255, 0.9);

  &::after {
    content: '${props => props.text}';
    white-space: nowrap;
    position: absolute;
    font-size: 10px;
    top: ${({ topText }) => topText && `${topText}px`};
    left: ${({ leftText }) => leftText && `${leftText}px`};
  }
`;

export const Constellation = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  @media ${device.tablet} {
    width: ${({ width }) => width && `${width}px`};
    height: ${({ height }) => height && `${height}px`};
  }
`;

export const Line = styled.span`
  position: absolute;
  z-index: 11;
  left: ${({ left }) => left && `${left}px`};
  top: ${({ top }) => top && `${top}px`};
  transform: ${({ rotate }) => rotate && `rotate(${rotate}deg)`};
  transform-origin: left;
  width: ${({ width }) => width && `${width}px`};
  height: 2px;
  background-color: rgba(255,255,255, 0.7);
`;

export const RowConstellation = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  width: ${({ width }) => width && width};
  height: 200px;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: center;

  @media ${device.tablet} {
    height: 150px;
  }
`;

export const Logo = styled.div`
  position: absolute;
  z-index: 10;
  width: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
