import styled from 'styled-components';
import { device } from '../../../../style/breakpoint';

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 100;
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 275px;
    height: 100vh;
    border-radius: 0 30px 30px 0;
    padding: 20px 0 20px 20px;
  }
`;
