import styled, { css } from 'styled-components';
import { device } from '../../../../../../../../style/breakpoint';
import { changeThemeTime } from '../../../../../../../../config/variables';

export const Navigation = styled.nav`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media ${device.tablet} {
    display: block;
    height: 50%;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

export const animationNavItem = css`
  transition: background-color ${changeThemeTime}s;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 48px;
  padding-left: 12px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  ${({ isThemeChanging }) => isThemeChanging && animationNavItem}
  ${({ selectedTab }) => selectedTab && selectedTabStyle}
  pointer-events: ${({ canChangeTheme }) => canChangeTheme.value ? 'unset' : 'none'};
  cursor: ${({ canChangeTheme }) => canChangeTheme.value ? 'pointer' : 'unset'};
`;

export const Link = styled.a`
  text-decoration: none;
  position: relative;
  color: unset;
`;

export const ItemName = styled.p`
  font-size: 16px;
  white-space: nowrap;
`;

export const BottomLimit = styled.span`
  width: 100%;
  position: absolute;
  bottom: -20px;
  height: 20px;
  background: ${({ theme }) => theme.limitsNavbarColor};
  ${({ isThemeChanging }) => isThemeChanging && animationNavItem}

  &:before {
    ${({ isThemeChanging }) => isThemeChanging && animationNavItem}
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    background: ${({ theme }) => theme.sideBarColor};
  }
`;

export const TopLimit = styled.span`
  width: 100%;
  position: absolute;
  top: -20px;
  height: 20px;
  background: ${({ theme }) => theme.limitsNavbarColor};
  ${({ isThemeChanging }) => isThemeChanging && animationNavItem}

  &:before {
    ${({ isThemeChanging }) => isThemeChanging && animationNavItem}
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background: ${({ theme }) => theme.sideBarColor};
  }
`;

export const selectedTabStyle = css`
  position: relative;
  background: ${({ theme }) => theme.limitsNavbarColor};
`;
