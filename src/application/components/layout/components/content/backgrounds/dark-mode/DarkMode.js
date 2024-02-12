import React, { useEffect, useRef, useState } from 'react';
import { StarsContainer, Wrapper } from './DarkMode.styled';
import useThemeState from "../../../../../../hooks/use-theme-state";
import {useTheme} from "styled-components";

export const random = (min, max) => {
  return min + Math.random() * (max - min);
};

export const createStars = (container) => {
  const star = document.createElement('div');
  const o_size = random(0.3, 4);
  const o_co = `rgba(255,255,255,${random(0.2, 0.8)})`;

  star.style.position = 'absolute';
  star.style.top = `${random(0, 100)}%`;
  star.style.left = `${random(0, 100)}%`;
  star.style.width = `${o_size}px`;
  star.style.height = `${o_size}px`;
  star.style.zIndex = '1';
  star.style.borderRadius = '50%';
  star.style.backgroundColor = o_co;
  star.classList.add('a_star');
  star.style.boxShadow = `0 0 ${8 + o_size}px ${o_co}`;
  star.animate([
    { opacity: 0.3 },
    { opacity: 1 },
  ], {
    duration: random(900, 3000),
    easing: 'linear',
    iterations: Infinity,
    direction: 'alternate',
  });

  container.current.appendChild(star);
};

const DarkMode = ({ isLightMode, isFirstTheme, showShootingStar, countStars, isContentBackground, addTransition = true, gradient = false }) => {
  const container = useRef(null);
  const theme = useTheme();

  const [starPositions, setStartPositions] = useState({
    staticStars: [
      {
        left:  random(0, window.innerWidth),
        top: random(0, window.innerHeight),
        time: 3000
      },
      {
        left:  random(0, window.innerWidth),
        top: random(0, window.innerHeight),
        time: 2500
      },
      {
        left:  random(0, window.innerWidth),
        top: random(0, window.innerHeight),
        time: 2800
      },
      {
        left:  random(0, window.innerWidth),
        top: random(0, window.innerHeight),
        time: 5000
      },{
        left:  random(0, window.innerWidth),
        top: random(0, window.innerHeight),
        time: 4000
      },
    ],
    star: {
      left:  random(0, window.innerWidth),
      top: random(0, window.innerHeight),
      time: 3000,
      show: false
    }
  });

  useEffect(() => {
    if (container) {
      setInterval(() => {
        setStartPositions({
          ...starPositions,
          star: {
            ...starPositions.star,
            show: false
          }
        });
      }, 3000);
      setInterval(() => {
        setStartPositions({
          ...starPositions,
          star: {
            top: random(0, window.innerHeight),
            left: random(0, window.innerWidth),
            time: 3000,
            show: true
          }
        });
      }, 15000);
    }
  }, [container]);

  useEffect(() => {
    if (container) {
      const width = parseFloat(window.getComputedStyle(container.current).width);
      const height = parseFloat(window.getComputedStyle(container.current).height);
      const size = (width * height) / (countStars || 3500);

      for (let i = 0; i < size; i++) {
        createStars(container, width, height, size);
      }
    }
  }, [container]);

  return (
    <Wrapper
      ref={container}
      isLightMode={isLightMode}
      theme={theme}
      addTransition={addTransition}
      isContentBackground={isContentBackground}
      isFirstTheme={isFirstTheme}
      gradient={gradient}
    >
      {starPositions.staticStars.map(star => (
          <StarsContainer
              top={star.top}
              left={star.left}
              time={star.time}
              removeTailAnimation
          >
            <div
                className="shooting-star"
            />
          </StarsContainer>
      ))}
      {showShootingStar && starPositions.star.show && <StarsContainer
          top={starPositions.star.top}
          left={starPositions.star.left}
          time={starPositions.star.time}
          removeHead
      >
        <div
            className="shooting-star"
        />
      </StarsContainer>}
    </Wrapper>
  );
};

export default DarkMode;
