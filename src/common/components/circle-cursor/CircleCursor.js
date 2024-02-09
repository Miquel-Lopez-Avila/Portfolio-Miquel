import React, { useRef, useLayoutEffect } from 'react';
import { useTheme } from 'styled-components';
import { Border, Cursor } from './CircleCursor.styled';

const CircleCursor = () => {
  const cursor = useRef(null);
  const theme = useTheme();

  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };

  useLayoutEffect(() => {
    document.addEventListener('mousemove', (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;
    });

    window.requestAnimationFrame(function loop() {
      const easting = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

      cursor.current.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      window.requestAnimationFrame(loop);
    });

    document.querySelectorAll('[data-cursor]').forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        if (item.dataset.cursor === 'pointer') {
          cursor.current.style.backgroundColor = 'rgba(255, 255, 255, .6)';
          cursor.current.style.setProperty('--size', '30px');
        }
      });
      item.addEventListener('mouseout', (e) => {
        cursor.current.style.backgroundColor = 'unset';
        cursor.current.style.mixBlendMode = 'unset';
        cursor.current.style.setProperty('--size', '10px');
      });
    });
  }, []);

  return (
    <Cursor ref={cursor}>
      <Border />
    </Cursor>
  );
};

export default CircleCursor;
