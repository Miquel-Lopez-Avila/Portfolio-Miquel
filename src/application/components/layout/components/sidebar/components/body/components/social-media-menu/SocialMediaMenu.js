import React from 'react';
import codepen from '../../../../../../../../assets/icons/logo-codepen.svg';
import github from '../../../../../../../../assets/icons/logo-github.svg';
import instagram from '../../../../../../../../assets/icons/logo-instagram.svg';
import useThemeChanged from '../../../../../../../../hooks/use-theme-changed';
import linkedin from '../../../../../../../../assets/icons/logo-linkedin.svg';
import mail from '../../../../../../../../assets/icons/mail-outline.svg';
import discord from '../../../../../../../../assets/icons/logo-discord.svg';
import { useTheme } from 'styled-components';
import Icon from '../../../../../../../../../common/components/icon';
import {
  Wrapper, List, Item, Link,
} from './SocialMediaMenu.styled';

const SocialMediaMenu = () => {
  const { isFirstTheme, themeChanged } = useThemeChanged();
  const theme = useTheme();

  return (
    <Wrapper>
      <List>
        <Item>
          <Link href="https://codepen.io/MiquelLopez" target="_blank" data-cursor="pointer">
            <Icon url={codepen} size="24px" color={theme.menuSocialMediaColor} mediaIcon themeChanged={themeChanged} />
          </Link>
        </Item>
        <Item>
          <Link href="https://github.com/Miquel-Lopez-Avila" target="_blank" data-cursor="pointer">
            <Icon url={github} size="24px" color={theme.menuSocialMediaColor} mediaIcon themeChanged={themeChanged} />
          </Link>
        </Item>
        <Item>
          <Link href="https://www.instagram.com/syntactic_sugar.dev/" target="_blank" data-cursor="pointer">
            <Icon url={instagram} size="24px" color={theme.menuSocialMediaColor} mediaIcon themeChanged={themeChanged} />
          </Link>
        </Item>
        <Item>
          <Link href="https://www.linkedin.com/in/miquel-l%C3%B3pez-avila-45b9b91b2/" target="_blank" data-cursor="pointer">
            <Icon url={linkedin} size="24px" color={theme.menuSocialMediaColor} mediaIcon themeChanged={themeChanged} />
          </Link>
        </Item>
        <Item>
          <Link href="mailto:miquellopezavila@gmail.com" target="_blank" data-cursor="pointer">
            <Icon url={mail} size="24px" color={theme.menuSocialMediaColor} mediaIcon themeChanged={themeChanged} />
          </Link>
        </Item>
        <Item>
          <Link href="https://www.linkedin.com/in/miquel-l%C3%B3pez-avila-45b9b91b2/" target="_blank" data-cursor="pointer">
            <Icon url={discord} size="24px" color={theme.menuSocialMediaColor} mediaIcon themeChanged={themeChanged} />
          </Link>
        </Item>
      </List>
    </Wrapper>
  );
};

export default SocialMediaMenu;
