import FixedSocialMediaMenu from '../common/components/fixed-social-media-menu';
import SunAndMoon from '../common/components/sun-and-moon';
import CircleCursor from '../common/components/circle-cursor';
import { useEffect, useState } from 'react';
import Initializer from './components/initializer';
import Layout from './components/layout';
import GlobalStyles from './style/global-style';
import AppProviders from './components/app-provider';
import HeaderMobile from './components/layout/components/header-mobile';

const defaultTabsState = {
  '#presentation': true,
  '#professional-resume': false,
  '#my-projects': false,
  '#syntactic-sugar': false,
};

const Application = () => {
  const [selectedTab, setSelectedTab] = useState(defaultTabsState);
  const [canChangeTheme, setCanChangeTheme] = useState({
    value: false,
    sun: false,
    moon: true,
  });

  useEffect(() => {
    window.location = '#presentation';
  }, []);

  return (
    <Initializer>
      <AppProviders>
        <SunAndMoon canChangeTheme={canChangeTheme} setCanChangeTheme={setCanChangeTheme} />
        <GlobalStyles />
        <CircleCursor />
        <FixedSocialMediaMenu />
        <Layout selectedTab={selectedTab} setSelectedTab={setSelectedTab} canChangeTheme={canChangeTheme} setCanChangeTheme={setCanChangeTheme} />
        <HeaderMobile canChangeTheme={canChangeTheme} defaultTabsState={defaultTabsState} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </AppProviders>
    </Initializer>
  );
};

export default Application;
