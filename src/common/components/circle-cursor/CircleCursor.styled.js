import styled, { keyframes } from 'styled-components';
import { changeThemeTime } from '../../../application/config/variables';
import { device } from '../../../application/style/breakpoint';

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  } 50% {
      transform: scale(1.0);
  }
`;

export const Cursor = styled.div`
  --size: 10px;
  position: fixed;
  top: calc(var(--size) / -2);
  left: calc(var(--size) / -2);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  pointer-events: none;
  transition: top 0.30s ease-out, left 0.30s ease-out, width 0.30s ease-out,
  height 0.30s ease-out, background-color 0.30s ease-out;
  z-index: 999;
  display: none;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const Border = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  transition: border-color ${changeThemeTime}s;
  filter: brightness(1.75);

`;
