/* eslint-disable react/prop-types */
import React, {useEffect, useRef, useState} from 'react';
import Icon from '../../../../../../../../../common/components/icon/Icon';
import code from '../../../../../../../../assets/icons/code-slash-outline.svg';
import person from '../../../../../../../../assets/icons/person-outline.svg';
import lines from '../../../../../../../../assets/icons/cellular-outline.svg';
import coffee from '../../../../../../../../assets/icons/cafe-outline.svg';
import useThemeChanged, { wait } from '../../../../../../../../hooks/use-theme-changed';
import PropTypes from 'prop-types';
import FlippedCardWithTheme from '../../../../../../../../../common/components/flipped-card-with-theme/FlippedCard';
import DarkMode, { createStars } from '../../../../../content/backgrounds/dark-mode/DarkMode';
import { useTheme } from 'styled-components';
import {
  Item, ItemName, Link, List, Navigation as NavigationStyle, BottomLimit, TopLimit, PointerEventsNone,
} from './Navigation.styled';
import LightMode from "../../../../../content/backgrounds/light-mode";
import useThemeState from "../../../../../../../../hooks/use-theme-state";
import {changeThemeTimeMs} from "../../../../../../../../config/variables";

const Navigation = ({
  selectedTab, defaultTabsState, canChangeTheme, setSelectedTab,
}) => {
  const { themeChanged } = useThemeChanged();
  const { isFirstTheme } = useThemeChanged();
  const [isLightMode] = useThemeState();
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
    setSelectedTab({ [position]: true });
  };

  return (
    <NavigationStyle>
      <List>
        <Link href="#presentation">
          {selectedTab['#presentation'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item onClick={() => handleChangeSelectedTab('#presentation')} selectedTab={selectedTab['#presentation']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {
            selectedTab['#presentation'] && <PointerEventsNone>
            <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
            <Icon url={person} color={theme?.letteringColor} size="24px" />
            <ItemName>Presentation</ItemName>
          </Item>
          {selectedTab['#presentation'] && <BottomLimit isThemeChanging={urlChanged} />}
        </Link>
        <Link href="#my-projects">
          {selectedTab['#my-projects'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item onClick={() => handleChangeSelectedTab('#my-projects')} selectedTab={selectedTab['#my-projects']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {
              selectedTab['#my-projects'] && <PointerEventsNone>
                <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
            <Icon url={code} color={theme?.letteringColor} size="24px" />
            <ItemName>Projects</ItemName>
          </Item>
          {selectedTab['#my-projects'] && <BottomLimit isThemeChanging={urlChanged} />}
        </Link>
        <Link href="#professional-resume">
          {selectedTab['#professional-resume'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item  onClick={() => handleChangeSelectedTab('#professional-resume')} selectedTab={selectedTab['#professional-resume']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {
              selectedTab['#professional-resume'] && <PointerEventsNone>
                <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
            <Icon url={lines} size="24px" color={theme?.letteringColor} />
            <ItemName>My Resume</ItemName>
          </Item>
          {selectedTab['#professional-resume'] && <BottomLimit isThemeChanging={urlChanged} />}
        </Link>
        <Link href="#syntactic-sugar">
          {selectedTab['#syntactic-sugar'] && <TopLimit isThemeChanging={urlChanged} />}
          <Item   onClick={() => handleChangeSelectedTab('#syntactic-sugar')} selectedTab={selectedTab['#syntactic-sugar']} isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {
              selectedTab['#syntactic-sugar'] && <PointerEventsNone>
                <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
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
