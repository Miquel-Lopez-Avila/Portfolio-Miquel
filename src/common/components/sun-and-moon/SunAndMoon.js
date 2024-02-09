import React, { useContext, useEffect, useState } from 'react';
import { cloudsColor, darkTheme, lightTheme } from '../../../application/config/theme';
import { Config } from '../../../application/config';
import { changeThemeTime } from '../../../application/config/variables';
import cloud from '../../../application/assets/images/cloud.svg';
import birds from '../../../application/assets/icons/flock-of-birds.svg';
import Moon from './components/moon/Moon';
import Sun from './components/sun/Sun';
import {
  Wrapper, Cloud, Birds, ContainerClickable,
} from './SunAndMoon.styled';

const SunAndMoon = ({ canChangeTheme, setCanChangeTheme }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isSunAndMoonClickeable, setIsSunAndMoonClickeable] = useState(false);
  const [unMountCurrentTheme, setUnMountCurrentTheme] = useState(false);
  const { setTheme } = useContext(Config);

  const changeTheme = () => {
    setCanChangeTheme({ ...canChangeTheme, value: false });
    setUnMountCurrentTheme(true);
    setIsSunAndMoonClickeable(false);
  };

  const onSunAnimationEnd = () => {
    if (unMountCurrentTheme) setIsLightTheme(false);
    setUnMountCurrentTheme(false);
    document.body.style.transition = `background-color ${changeThemeTime}s`;
    setCanChangeTheme({ ...canChangeTheme, sun: true });
  };

  const onMoonAnimationEnd = () => {
    if (unMountCurrentTheme) setIsLightTheme(true);
    setUnMountCurrentTheme(false);
    setCanChangeTheme({ ...canChangeTheme, moon: true });
  };

  useEffect(() => {
    setTheme(isLightTheme ? lightTheme : darkTheme);
  }, [isLightTheme, setTheme]);

  useEffect(() => {
    if (canChangeTheme.sun && canChangeTheme.moon) {
      setCanChangeTheme({
        value: true,
        sun: false,
        moon: false,
      });
    }
  }, [canChangeTheme]);

  const props = {
    unMountCurrentTheme,
    onSunAnimationEnd,
    onMoonAnimationEnd,
  };

  return (
    <Wrapper>
      <Birds url={birds} top="80%" left="15%" size="20px" color="#242323" opacity="0.8" index={11} />
      <Cloud url={cloud} top="55%" left="5%" size="100px" color={cloudsColor} opacity="0.8" isLeft index={11} />
      <ContainerClickable isSunAndMoonClickeable={isSunAndMoonClickeable} onClick={changeTheme} canChangeTheme={canChangeTheme} data-cursor={canChangeTheme.value ? 'pointer' : 'unset'}>
        {isLightTheme ? <Sun {...props} /> : <Moon {...props} />}
      </ContainerClickable>
    </Wrapper>
  );
};

export default SunAndMoon;
