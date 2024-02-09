import styled, { css, keyframes } from 'styled-components';
import Icon from '../../../../../../../../../common/components/icon';
import { lightTheme } from '../../../../../../../../config/theme';
import { changeThemeTime } from '../../../../../../../../config/variables';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 20px 10px 0;
`;

export const AvatarContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
`;

export const DarknessImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50%;
  object-fit: cover;
`;

export const LightImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50%;
  object-fit: cover;
`;

export const Avatar = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.h1`
`;

export const Position = styled.p`
  width: 100%;
  text-align: left;
  padding: 0 10px;
`;

export const LocationWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const LocationText = styled.p`
  color: #159be3;
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

const onMountBird = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    transform: translateX(0);
    opacity: 100%;
  }
`;

const unMountBird = keyframes`
  0% {
    transform: translatY(0);
    opacity: 100%;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
`;

const onMountBirdAnimation = css`
  animation: ${onMountBird} ${changeThemeTime}s forwards;
`;

const unMountBirdAnimation = css`
  animation: ${unMountBird} ${changeThemeTime}s forwards;
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

export const Fog = styled(Icon)`
  object-fit: cover;
  position: absolute;
  z-index: ${({ index }) => index && index};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  ${({ theme, isLeft }) => theme === lightTheme ? (isLeft ? unMountAnimationToLeft : unMountAnimationToRight) : (isLeft ? onMountAnimationFromRight : onMountAnimationFromLeft)};
  ${({ addClipPath }) => addClipPath && clipPath}
`;

export const Bird = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 75%;
  top: -35px;
  ${({ theme }) => theme === lightTheme ? onMountBirdAnimation : unMountBirdAnimation};
`;

export const RelativeContainer = styled.div`
  position: relative;
`;
