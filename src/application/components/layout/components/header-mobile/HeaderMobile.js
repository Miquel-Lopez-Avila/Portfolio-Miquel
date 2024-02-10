import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import Icon from '../../../../../common/components/icon/Icon';
import code from '../../../../assets/icons/code-slash-outline.svg';
import person from '../../../../assets/icons/person-outline.svg';
import lines from '../../../../assets/icons/cellular-outline.svg';
import coffee from '../../../../assets/icons/cafe-outline.svg';
import {
  Container, Wrapper, Tab, Text, NavLink, RightLimit, LeftLimit, Center,
} from './HeaderMobile.styled';
import useThemeChanged, {wait} from "../../../../hooks/use-theme-changed";
import {changeThemeTimeMs} from "../../../../config/variables";
import {PointerEventsNone} from "../sidebar/components/body/components/navigation/Navigation.styled";
import LightMode from "../content/backgrounds/light-mode";
import DarkMode from "../content/backgrounds/dark-mode";
import useThemeState from "../../../../hooks/use-theme-state";

const HeaderMobile = ({
  selectedTab, setSelectedTab, defaultTabsState, canChangeTheme,
}) => {
  const theme = useTheme();
  const [isLightMode] = useThemeState();
  const { isFirstTheme } = useThemeChanged();
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
    <Wrapper>
      <Container>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#presentation')} href="#presentation" isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} selectedTab={selectedTab['#presentation']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#presentation'] && <LeftLimit isThemeChanging={urlChanged} />}
            {
              selectedTab['#presentation'] && <PointerEventsNone>
                <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
            <Center>
              <Icon url={person} size="24px" color={theme?.letteringColor} />
              <Text>Just Me</Text>
            </Center>
            {selectedTab['#presentation'] && <RightLimit isThemeChanging={urlChanged} />}
          </NavLink>
        </Tab>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#my-projects')} href="#my-projects" isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} selectedTab={selectedTab['#my-projects']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#my-projects'] && <LeftLimit isThemeChanging={urlChanged} />}
            {
              selectedTab['#my-projects'] && <PointerEventsNone>
                <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
            <Center>
              <Icon url={code} size="24px" color={theme?.letteringColor} />
              <Text>Projects</Text>
            </Center>
            {selectedTab['#my-projects'] && <RightLimit isThemeChanging={urlChanged} />}
          </NavLink>
        </Tab>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#professional-resume')} href="#professional-resume" isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} selectedTab={selectedTab['#professional-resume']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#professional-resume'] && <LeftLimit isThemeChanging={urlChanged} />}
            {
              selectedTab['#professional-resume'] && <PointerEventsNone>
                <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
            <Center>
              <Icon url={lines} size="24px" color={theme?.letteringColor} />
              <Text>Resume</Text>
            </Center>
            {selectedTab['#professional-resume'] && <RightLimit isThemeChanging={urlChanged} />}
          </NavLink>
        </Tab>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#syntactic-sugar')} href="#syntactic-sugar" isThemeChanging={urlChanged} canChangeTheme={canChangeTheme} selectedTab={selectedTab['#syntactic-sugar']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#syntactic-sugar'] && <LeftLimit isThemeChanging={urlChanged} />}
            {
              selectedTab['#syntactic-sugar'] && <PointerEventsNone>
                <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} countStars={1500} addTransition={urlChanged}/>
              </PointerEventsNone>
            }
            <Center>
              <Icon url={coffee} size="24px" color={theme?.letteringColor} />
              <Text>S. sugar</Text>
            </Center>
            {selectedTab['#syntactic-sugar'] && <RightLimit isThemeChanging={urlChanged} />}
          </NavLink>
        </Tab>
      </Container>
    </Wrapper>
  );
};

export default HeaderMobile;
