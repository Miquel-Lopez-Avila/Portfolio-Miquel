import React from 'react';
import { SideBar as SideBarStyle } from './Sidebar.styled';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Sidebar = ({ ...props }) => {
  return (
    <SideBarStyle>
      <Header />
      <Body {...props} />
      <Footer />
    </SideBarStyle>
  );
};

export default Sidebar;
