import React, {useRef} from 'react';
import ChromeExtension from '../../application/assets/projects-images/img.png';
import Carendar from '../../application/assets/projects-images/img_1.png';
import arrowIcon from '../../application/assets/icons/arrow-right-solid.svg';
import NodesNavigationFocus from '../../application/assets/projects-images/189481193-62e21400-840a-4fd4-b0fe-314ae153ffe7.gif';
import {
  ContainerProjects, Wrapper, Image, PageTitle, Color, Anchor, Block, ContainerText, ColoredSpan,
} from './Projects.styled';
import Icon from "../../common/components/icon";
import useThemeChanged from "../../application/hooks/use-theme-changed";
import {useTheme} from "styled-components";
import Canvas from "./components/ballons";

const Projects = ({ showView }) => {
  const container = useRef(null);
  const { themeChanged } = useThemeChanged();
  const theme = useTheme();

  return (
    <Wrapper showView={showView}>
      <PageTitle>
        Learn about my <ColoredSpan>personal projects</ColoredSpan>
      </PageTitle>
      <ContainerProjects ref={container}>
          {container.current && <Canvas container={container.current} />}
      </ContainerProjects>
    </Wrapper>
  );
};

export default Projects;
