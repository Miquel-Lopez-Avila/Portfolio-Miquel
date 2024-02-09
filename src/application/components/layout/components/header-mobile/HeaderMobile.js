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

const HeaderMobile = ({
  selectedTab, setSelectedTab, defaultTabsState, canChangeTheme,
}) => {
  const theme = useTheme();
  const isThemeChanging = true;
  useEffect(() => {
    if (window.location.hash === '') {
      setSelectedTab({ ...selectedTab, '#presentation': true });
    }
  }, []);

  const handleChangeSelectedTab = (position) => {
    setSelectedTab({ ...defaultTabsState, [position]: true });
  };

  return (
    <Wrapper>
      <Container>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#presentation')} href="#presentation" canChangeTheme={canChangeTheme} selectedTab={selectedTab['#presentation']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#presentation'] && <LeftLimit isThemeChanging={isThemeChanging} />}
            <Center>
              <Icon url={person} size="24px" color={theme?.letteringColor} />
              <Text>Just Me</Text>
            </Center>
            {selectedTab['#presentation'] && <RightLimit isThemeChanging={isThemeChanging} />}
          </NavLink>
        </Tab>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#my-projects')} href="#my-projects" canChangeTheme={canChangeTheme} selectedTab={selectedTab['#my-projects']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#my-projects'] && <LeftLimit isThemeChanging={isThemeChanging} />}
            <Center>
              <Icon url={code} size="24px" color={theme?.letteringColor} />
              <Text>Projects</Text>
            </Center>
            {selectedTab['#my-projects'] && <RightLimit isThemeChanging={isThemeChanging} />}
          </NavLink>
        </Tab>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#professional-resume')} href="#professional-resume" canChangeTheme={canChangeTheme} selectedTab={selectedTab['#professional-resume']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#professional-resume'] && <LeftLimit isThemeChanging={isThemeChanging} />}
            <Center>
              <Icon url={lines} size="24px" color={theme?.letteringColor} />
              <Text>Resume</Text>
            </Center>
            {selectedTab['#professional-resume'] && <RightLimit isThemeChanging={isThemeChanging} />}
          </NavLink>
        </Tab>
        <Tab>
          <NavLink onClick={() => handleChangeSelectedTab('#syntactic-sugar')} href="#syntactic-sugar" canChangeTheme={canChangeTheme} selectedTab={selectedTab['#syntactic-sugar']} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
            {selectedTab['#syntactic-sugar'] && <LeftLimit isThemeChanging={isThemeChanging} />}
            <Center>
              <Icon url={coffee} size="24px" color={theme?.letteringColor} />
              <Text>S. sugar</Text>
            </Center>
            {selectedTab['#syntactic-sugar'] && <RightLimit isThemeChanging={isThemeChanging} />}
          </NavLink>
        </Tab>
      </Container>
    </Wrapper>
  );
};

export default HeaderMobile;
