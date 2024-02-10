import styled, { css } from 'styled-components';
import { changeThemeTime } from '../../../../config/variables';
import { device } from '../../../../style/breakpoint';
import { animationNavItem } from '../sidebar/components/body/components/navigation/Navigation.styled';

export const Wrapper = styled.header`
  position: fixed;
  z-index: 11;
  bottom: 0;
  width: 100%;
  padding: 0 0 0.7rem 0;
  background: ${({ theme }) => theme.sideBarColor};
  transition: background-color ${changeThemeTime}s;
  display: block;
  box-shadow: 0px -2px 6px 0px ${({ theme }) => theme.shadowNavBarMobile};

  @media ${device.tablet} {
    display: none;
  }
`;

export const Container = styled.nav`
  width: min(100% - 30px, 750px);
  margin-inline: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px !important;
  justify-content: center;
  align-items: center;
  max-width: 20%;
  overflow: hidden;
`;

export const selectedTabStyle = css`
  position: relative;
  background: ${({ theme }) => theme.limitsNavbarColor};
`;

export const Text = styled.p`
  font-size: 0.7rem;
  white-space: nowrap;
`;

export const Center = styled.div`
  display: grid;
  place-items: center;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  position: relative;
  color: unset;
  pointer-events: ${({ canChangeTheme }) => canChangeTheme.value ? 'unset' : 'none'};
  cursor: ${({ canChangeTheme }) => canChangeTheme.value ? 'pointer' : 'unset'};
  ${({ isThemeChanging }) => isThemeChanging && animationNavItem}
  border-radius: 0 0 12px 12px;
  padding: 4px 12px;
  ${({ selectedTab }) => selectedTab && selectedTabStyle};
`;

export const RightLimit = styled.span`
  height: 100%;
  position: absolute;
  right: -20px;
  width: 20px;
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
    border-top-left-radius: 20px;
    background: ${({ theme }) => theme.sideBarColor};
  }
`;

export const LeftLimit = styled.span`
  height: 100%;
  position: absolute;
  left: -20px;
  width: 20px;
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
