import React, { useEffect, useRef } from 'react';
import DarkMode from '../../../application/components/layout/components/content/backgrounds/dark-mode';
import cloud from '../../../application/assets/images/cloud.svg';
import { cloudsColorInitialLoader } from '../../../application/config/theme';
import {
  Wrapper,
  Cloud,
  RaindropContainer,
} from './InitialLoader.styled';

const InitialLoader = () => {
  const rainContainer = useRef(null);

  useEffect(() => {
    genRain();
  }, []);

  const genRain = () => {
    for (let i = 0; i < 400; i++) {
      const drop = document.createElement('div');
      drop.classList.add('raindrop');
      rainContainer.current.appendChild(drop);

      drop.style.left = `${Math.random() * window.innerWidth}px`;
      drop.style.animationDelay = `${Math.random() * 4}s`;
    }
  };

  return (
    <Wrapper>
      <RaindropContainer ref={rainContainer} />
      <Cloud url={cloud} top="30%" left="-10%" size="1000px" color={cloudsColorInitialLoader} opacity="1" isLeft index={11} />
      <Cloud url={cloud} top="-60%" left="-10%" size="1300px" color={cloudsColorInitialLoader} opacity="1" isLeft index={11} />
      <Cloud url={cloud} top="0%" left="35%" size="1500px" color={cloudsColorInitialLoader} opacity="1" index={11} />
      <Cloud url={cloud} top="0%" left="65%" size="500px" color={cloudsColorInitialLoader} opacity="1" index={11} />
      <DarkMode />
    </Wrapper>
  );
};

export default InitialLoader;
