import styled, { css } from 'styled-components';
import { device } from '../../../application/style/breakpoint';

const headsAnimation = css`
  transform: perspective(2500px) rotateY(180deg);
`;

const backAnimation = css`
  transform: perspective(2500px) rotateY(360deg);
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${({ fullWidthOnMobile, width }) => fullWidthOnMobile ? '100%' : width};
  height: ${({ height }) => height || 'auto'};
  cursor: ${({ pointer }) => pointer && 'pointer'};
  transform-style: preserve-3d;

  @media ${device.tablet} {
    width: ${({ width }) => width && width} !important;
    height: ${({ height }) => height || 'auto'} !important;
  }

  & > * {
    border-radius: ${({ radius }) => radius && radius};
    height: 100%;
    width: 100%;
    line-height: 150px;
    backface-visibility: hidden;
    position: absolute;
    transform: rotateY(180deg);
    transition: all 1s;
    box-shadow: 6px 6px ${({ theme }) => theme.primaryColor};
    ${({ withBorder }) => withBorder && withBorderStyle}
    ${({ isLightMode }) => isLightMode && backAnimation};

  }

  & > div:first-child {
    transform: perspective(2500px) rotateY(180deg);
    ${({ isLightMode }) => isLightMode && backAnimation};
    transition-delay: ${({ delay }) => delay && `${delay}s`};
  }

  & > div:last-child {
    transform: perspective(2500px) rotateY(0deg);
    ${({ isLightMode }) => isLightMode && headsAnimation}
    transition-delay: ${({ delay }) => delay && `${delay}s`};
  }
`;

const withBorderStyle = css`
  border: 6px solid ${({ theme }) => theme.primaryColor};
`;
