import React from 'react';
import {
  Wrapper, Line, NickName, Container,
} from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <NickName data-cursor="pointer">@syntactic_sugar.dev</NickName>
        <Line />
      </Container>
    </Wrapper>
  );
};

export default Header;
