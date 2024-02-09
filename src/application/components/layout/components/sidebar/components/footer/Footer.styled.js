import styled from 'styled-components';
import { device } from '../../../../../../style/breakpoint';

export const Footer = styled.footer`
  height: 25px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding-right: 20px;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;
