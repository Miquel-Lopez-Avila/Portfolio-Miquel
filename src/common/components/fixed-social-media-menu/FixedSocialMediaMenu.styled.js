import styled from 'styled-components';
import { changeThemeTime } from '../../../application/config/variables';
import { device } from '../../../application/style/breakpoint';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 25px;
  z-index: 6;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    transition: background-color ${changeThemeTime}s;
    background-color: ${({ theme }) => theme.menuSocialMediaColor};
  }

  & > li:last-child {
    margin-bottom: 12px;
  }
`;

export const Item = styled.li`
  cursor: pointer;
`;

export const Link = styled.a`
  cursor: pointer;
`;
