import styled from 'styled-components';
import { changeThemeTime } from '../../../../../../config/variables';
import { device } from '../../../../../../style/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  height: 50px;
  padding-right: 20px;
`;

export const Container = styled.div`
  width: 80%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const NickName = styled.h1`
  text-align: left;
  padding-bottom: 10px;
  font-size: 20px;

  @media ${device.tablet} {
    text-align: center;
  }
`;

export const Line = styled.hr`
  height: 2px;
  transition: background-color ${changeThemeTime}s;
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
`;
