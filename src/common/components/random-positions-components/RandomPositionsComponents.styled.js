import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width:100%;
  height: 100%;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
`;
