import styled from 'styled-components';
import { changeThemeTime } from '../../application/config/variables';
import { device } from '../../application/style/breakpoint';

export const Wrapper = styled.div`
  position: relative;
  z-index: 11;
  background: transparent;
  display: ${({ showView }) => showView ? 'block' : 'none'};
  padding: 40px 30px 30px 30px;

  @media ${device.tablet} {
    padding: 40px 60px 20px 40px;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: visible;
  width: 100%;
  padding: 20px 15px 30px 0;
  height: 500px;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 8px;               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background: lightgray;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primaryColor};
  }

  @media ${device.tablet} {
    flex-direction: row;
    height: 84vh;
    width: 98%;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 40px;
  transition: color ${changeThemeTime}s;
  position: relative;
  z-index: 2;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media ${device.tablet} {
    width: 32%;
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
