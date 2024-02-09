import React from 'react';
import Presentation from '../../../pages/presentation';
import ProfessionalResume from '../../../pages/professional-resume/ProfessionalResume';
import Projects from '../../../pages/projects/Projects';
import SyntaticSugar from '../../../pages/syntatic-sugar/SyntaticSugar';
import SideBar from './components/sidebar';
import Content from './components/content';
import { Wrapper } from './Layout.styled';

const Layout = ({ selectedTab, ...props }) => {
  return (
    <Wrapper>
      <SideBar selectedTab={selectedTab} {...props} />
      <Content>
        <Presentation showView={selectedTab['#presentation']} />
        <ProfessionalResume showView={selectedTab['#professional-resume']} />
        <Projects showView={selectedTab['#my-projects']} />
        <SyntaticSugar showView={selectedTab['#syntactic-sugar']} />
      </Content>
    </Wrapper>
  );
};

export default Layout;
