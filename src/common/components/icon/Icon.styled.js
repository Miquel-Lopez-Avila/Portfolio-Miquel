import styled, { css } from 'styled-components';
import { changeThemeTime } from '../../../application/config/variables';

export const MediaIconAnimation = css`
  background-color: ${({ theme }) => theme.primaryColor} !important;
  transform: translateY(-5px);
`;

export const Wrapper = styled.span`
  display: flex;
  padding: 5px;
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};

  & > svg {
    transition: ${({ themeChanged }) => themeChanged ? `background-color ${changeThemeTime}s, transform 0.2s` : 'transform 0.2s'};
  }

  &:hover > svg {
    transition: ${({ themeChanged }) => themeChanged ? `background-color ${changeThemeTime}s, transform 0.2s` : 'transform 0.2s'};
    ${({ mediaIcon }) => mediaIcon && MediaIconAnimation}
  }
`;

export const Mask = styled.svg`
  width: ${({ size, width }) => width || size || '40px'};
  height: ${({ size, height }) => height || size || '40px'};
  opacity: ${({ opacity }) => opacity && opacity};
  background-color: ${({ color }) => color || '#ffffff'};
  -webkit-mask: ${({ mask }) => `url(${mask})`};
  mask: ${({ mask }) => `url(${mask})`};
  -webkit-mask-size: cover;
  mask-size: cover;
  transform: ${({ rotate }) => rotate && rotate};
  transition: background-color ${changeThemeTime}s;
`;
