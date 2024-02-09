import React, { useEffect, useState } from 'react';
import plane2Gif from '../../../../../../assets/gifs/avion2.gif';
import {
  ContainerPlane, Plane, Wrapper, Rainbow,
} from './LightMode.styled';

const LightMode = ({ isLightMode, isFirstTheme }) => {
  const [plane, setPlane] = useState({
    show: false,
    ref: 1,
    top: 0,
    left: 0,
  });

  const random = (min, max) => {
    return min + Math.random() * (max - min);
  };

  useEffect(() => {
    lunchPlane();

    setInterval(() => {
      lunchPlane();
    }, 30000);
  }, []);

  const lunchPlane = () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    setPlane({
      show: true,
      ref: Math.ceil(random(0, 2)),
      top: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? getRandomInt(385, window.innerHeight) : Math.floor(Math.random() * window.innerHeight),
      left: 0,
    });
  };
  return (
    <Wrapper isLightMode={isLightMode} isFirstTheme={isFirstTheme}>
      {isFirstTheme && <Rainbow isLightMode={isLightMode} />}
      {plane.show && (
      <ContainerPlane top={plane.top} left={plane.left}>
        {plane.ref === 1 ? <Plane src={plane2Gif} /> : <Plane src={plane2Gif} />}
      </ContainerPlane>
      )}
    </Wrapper>
  );
};

export default LightMode;
