import styled, { css, keyframes } from 'styled-components';
import { device } from '../../application/style/breakpoint';
import { changeThemeTime } from '../../application/config/variables';
import Icon from '../../common/components/icon';

export const Wrapper = styled.div`
  position: relative;
  background: transparent;
  display: ${({ showView }) => showView ? 'block' : 'none'};
  padding: 40px 30px 30px 30px;

  @media ${device.tablet} {
    padding: 40px 60px 20px 40px;
  }
`;

export const Color = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  transition: color ${changeThemeTime}s;
  text-align: center;

    & > * {
      white-space: nowrap;
    }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerLanguages = styled.div`
  display: flex;
  gap: 20px;
`;

export const Languages = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  overflow: hidden;
  display: grid;
  place-items: center;
`;

const transparency = keyframes`
  from {
    opacity: 0.1;
  } to {
    opacity: 0;
  }
`;

const visible = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 0.1;
  }
`;

export const ImgFlag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WrapperQuotes = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Sentence = styled.p`
  font-size: 50px;
  text-align: left;
`;

export const Author = styled.p`
  text-align: right;
  font-size: 20px;
`;

export const Intro = styled.p`
  text-align: left;
  font-size: 50px;
`;

export const ContainerQuotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
  height: 100%;
  padding: 100px 10px;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 100px 50px;
  }
`;

const imageStyleSocialMedia = css`
  position: absolute;
  z-index: -1;
`;

const translateAndRotateIn = keyframes`
  0% { transform: translate(25%, 25%) rotate(45deg); }
  100% { transform: translate(100%, 100%) rotate(15deg); }
`;

const translateAndRotateOut = keyframes`
  0% { transform: translate(100%, 100%) rotate(15deg); }
  100% { transform: translate(25%, 25%) rotate(45deg); }
`;

export const Satelite = styled.img`
  ${imageStyleSocialMedia};
  top: 90%;
  left: 0;
  width: 60px;
  animation: ${translateAndRotateIn} 10s ease alternate infinite;

  ${device.tablet} {
    display: block;
  }
`;

export const Molino = styled.img`
  ${imageStyleSocialMedia};
  top: 79%;
  left: 72%;
  width: 40px;
  animation: ${translateAndRotateIn} 10s ease alternate infinite;

  ${device.tablet} {
    display: block;
    top: 10%;
  }

  ${device.desktop} {
    left: 30%;
  }
`;

export const ToothPasteImg = styled.img`
  ${imageStyleSocialMedia};
  top: 90%;
  left: 25%;
  width: 80px;
  animation: ${translateAndRotateOut} 10s ease alternate infinite;

  ${device.tablet} {
    display: block;
    top: 20%;
    left: 18%;
  }

  ${device.desktop} {
    top: 75%;
    left: 25%;
  }
`;

export const Telescopio = styled.img`
  ${imageStyleSocialMedia};
  top: 80%;
  left: 30%;
  width: 80px;

  ${device.tablet} {
    display: block;
  }

  ${device.desktop} {
    top: 20%;
  }
`;

export const Infinito = styled.img`
  ${imageStyleSocialMedia};
  animation: ${translateAndRotateOut} 10s ease alternate infinite;
  top: 95%;
  left: 60%;
  width: 55px;

  ${device.tablet} {
    display: block;
    left: 50%;
  }
`;
