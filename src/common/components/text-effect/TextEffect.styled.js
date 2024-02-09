import styled from 'styled-components';
import { changeThemeTime } from '../../../application/config/variables';

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  width: 100%;
  padding: 0 20px;
  flex-wrap: nowrap;
`;

export const Color = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  transition: color ${changeThemeTime}s;
  text-align: center;

    & > * {
      white-space: nowrap;
    }
`;

export const Text = styled.span`
  position: absolute;
  left: 30px;
  top: 0;
  width: 100%;
  display: inline-block;
  text-align: center;
  user-select: none;
`;
