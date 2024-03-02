import styled from "styled-components";
import { device } from "../../application/style/breakpoint";
import { changeThemeTime } from "../../application/config/variables";

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  display: ${({ showView }) => (showView ? "block" : "none")};
  padding: 40px 30px 30px 30px;
  width: 100%;
  @media ${device.tablet} {
    padding: 40px 60px 20px 40px;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  object-position: center;
  display: block;
  min-height: 150px;
  transition: all ${changeThemeTime}s;
  box-shadow: 6px 6px ${({ theme }) => theme.primaryColor};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: start;
    gap: 20px;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
`;

export const Anchor = styled.a`
  width: 100%;
  border-radius: 5px;
  display: block;

  @media ${device.tablet} {
    width: 45%;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 40px;
  transition: color ${changeThemeTime}s;
  position: relative;
  z-index: 2;
`;

export const Color = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  transition: color ${changeThemeTime}s;
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-size: ${({ size }) => (size ? `${size}px` : "auto")};

  & > * {
    white-space: nowrap;
  }
`;

export const ColoredSpan = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  transition: color ${changeThemeTime}s;
  text-align: left;
  margin-bottom: 10px;
  font-size: ${({ size }) => (size ? `${size}px` : "auto")};

  & > * {
    white-space: nowrap;
  }
`;
