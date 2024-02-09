import React, { useEffect, useRef, useState } from 'react';
import { StarsContainer, Wrapper } from './DarkMode.styled';

const random = (min, max) => {
  return min + Math.random() * (max - min);
};

const createStars = (container) => {
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

const DarkMode = ({ isLightMode, isFirstTheme }) => {
  const container = useRef(null);

  const [starPositions, setStartPositions] = useState({
    left: random(0, window.innerWidth),
    top: random(0, window.innerHeight),
  });

  useEffect(() => {
    if (container) {
      setInterval(() => {
        setStartPositions({
          left: random(0, window.innerWidth),
          top: random(0, window.innerHeight),
        });
      }, 3000);
    }
  }, [container]);

  useEffect(() => {
    if (container) {
      const width = parseFloat(window.getComputedStyle(container.current).width);
      const height = parseFloat(window.getComputedStyle(container.current).height);
      const size = (width * height) / 6500;

      for (let i = 0; i < size; i++) {
        createStars(container, width, height, size);
      }
    }
  }, [container]);

  return (
    <Wrapper
      ref={container}
      isLightMode={isLightMode}
      isFirstTheme={isFirstTheme}
    >
      <StarsContainer
        top={starPositions.top}
        left={starPositions.left}
      >
        <div
          className="shooting-star"
        />
      </StarsContainer>
    </Wrapper>
  );
};

export default DarkMode;
