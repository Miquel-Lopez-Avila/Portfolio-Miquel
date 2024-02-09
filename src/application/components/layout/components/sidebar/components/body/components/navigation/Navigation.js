/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Icon from '../../../../../../../../../common/components/icon/Icon';
import code from '../../../../../../../../assets/icons/code-slash-outline.svg';
import person from '../../../../../../../../assets/icons/person-outline.svg';
import lines from '../../../../../../../../assets/icons/cellular-outline.svg';
import coffee from '../../../../../../../../assets/icons/cafe-outline.svg';
import useThemeChanged, { wait } from '../../../../../../../../hooks/use-theme-changed';
import { changeThemeTimeMs } from '../../../../../../../../config/variables';
import PropTypes from 'prop-types';
import FlippedCardWithTheme from '../../../../../../../../../common/components/flipped-card-with-theme/FlippedCard';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTheme } from 'styled-components';
import {
  Item, ItemName, Link, List, Navigation as NavigationStyle, BottomLimit, TopLimit,
} from './Navigation.styled';

const Navigation = ({
  selectedTab, defaultTabsState, canChangeTheme, setSelectedTab,
}) => {
  const { themeChanged } = useThemeChanged();
  const theme = useTheme();
  const [urlChanged, setUrlChanged] = useState(true);

  useEffect(() => {
    if (window.location.hash === '') {
      setSelectedTab({ ...selectedTab, '#presentation': true });
    }
  }, []);

  useEffect(() => {
    if (!urlChanged) {
      const timer = wait(() => {
        setUrlChanged(true);
      }, changeThemeTimeMs);

      return () => {
        clearInterval(timer);
      };
    }
  }, [urlChanged]);

  const handleChangeSelectedTab = (position) => {
    setUrlChanged(false);
    setSelectedTab({ ...defaultTabsState, [position]: true });
  };

  return (
    <NavigationStyle>
      <List>
        <Link href="#presentation">
          {selectedTab['#presentation'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item onClick={() => handleChangeSelectedTab('#presentation')} selectedTab={selectedTab['#presentation']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            <Icon url={person} color={theme?.letteringColor} size="24px" />
            <ItemName>Presentation</ItemName>
          </Item>
          {selectedTab['#presentation'] && <BottomLimit isThemeChanging={urlChanged} />}
        </Link>
        <Link href="#my-projects">
          {selectedTab['#my-projects'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item onClick={() => handleChangeSelectedTab('#my-projects')} selectedTab={selectedTab['#my-projects']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            <Icon url={code} color={theme?.letteringColor} size="24px" />
            <ItemName>Projects</ItemName>
          </Item>
          {selectedTab['#my-projects'] && <BottomLimit isThemeChanging={urlChanged} />}
        </Link>
        <Link href="#professional-resume">
          {selectedTab['#professional-resume'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item onClick={() => handleChangeSelectedTab('#professional-resume')} selectedTab={selectedTab['#professional-resume']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            <Icon url={lines} size="24px" color={theme?.letteringColor} />
            <ItemName>My Resume</ItemName>
          </Item>
          {selectedTab['#professional-resume'] && <BottomLimit isThemeChanging={urlChanged} />}
        </Link>
        <Link href="#syntactic-sugar">
          {selectedTab['#syntactic-sugar'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item onClick={() => handleChangeSelectedTab('#syntactic-sugar')} selectedTab={selectedTab['#syntactic-sugar']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            <Icon url={coffee} size="24px" color={theme?.letteringColor} />
            <ItemName>Syntactic Sugar</ItemName>
          </Item>
          {selectedTab['#syntactic-sugar'] && <BottomLimit isThemeChanging={urlChanged} />}
        </Link>
      </List>
    </NavigationStyle>
  );
};

FlippedCardWithTheme.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default Navigation;
