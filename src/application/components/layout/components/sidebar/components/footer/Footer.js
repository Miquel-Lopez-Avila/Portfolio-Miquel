import React from 'react';
import { Footer as FooterStyle } from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyle>
      <small>
        &copy; Copyright
        <span> {currentYear}</span>
        , All Rights Reserved
      </small>
    </FooterStyle>
  );
};

export default Footer;
