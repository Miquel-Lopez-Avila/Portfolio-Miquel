import React from 'react';
import ChromeExtension from '../../application/assets/projects-images/img.png';
import Carendar from '../../application/assets/projects-images/img_1.png';
import NodesNavigationFocus from '../../application/assets/projects-images/189481193-62e21400-840a-4fd4-b0fe-314ae153ffe7.gif';
import {
  ContainerProjects, Wrapper, Image, PageTitle, Color, Anchor, Block, ContainerText, ColoredSpan,
} from './Projects.styled';

const Projects = ({ showView }) => {
  return (
    <Wrapper showView={showView}>
      <PageTitle>
        Learn about my <ColoredSpan>personal projects</ColoredSpan>
      </PageTitle>
      <ContainerProjects>
        <Block>
          <Anchor href="https://github.com/Miquel-Lopez-Avila/nodes-navigation-focus" target="_blank" rel="noreferrer">
            <Image src={NodesNavigationFocus} data-cursor="pointer" />
          </Anchor>
          <ContainerText>
            <div><Color size={20}>nodes-navigation-focus</Color> This is a JS library which <ColoredSpan>automates the focus moviment in the screen.</ColoredSpan><br />
              The library uses the <ColoredSpan>react-hooks to manipulate the DOM</ColoredSpan> and recieve and return infomation about the state of the element.
            </div>
          </ContainerText>
        </Block>
        <Block reverse>
          <Anchor href="https://github.com/Miquel-Lopez-Avila/FlowTime" target="_blank" rel="noreferrer">
            <Image src={ChromeExtension} data-cursor="pointer" />
          </Anchor>
          <ContainerText>
            <div>
              <Color size={20}>FlowTime Pro</Color> Manage time and increment your productivity.<br />
              This is an extension to <ColoredSpan>manage time</ColoredSpan>, with the finallity of make rest during a determinate period of work.
            </div>
          </ContainerText>
        </Block>
        <Block>
          <Anchor href="https://github.com/Miquel-Lopez-Avila/Carendar-REACT" target="_blank" rel="noreferrer">
            <Image src={Carendar} data-cursor="pointer" />
          </Anchor>
          <ContainerText>
            <div><Color size={20}>Carendar</Color> This application consists of <ColoredSpan>management functions.</ColoredSpan><br />
              Such as requesting, modifying or deleting hairdresser appointments, inventory or stock management, customer management (personal information) and cashier control, mainly.
            </div>
          </ContainerText>
        </Block>
      </ContainerProjects>
    </Wrapper>
  );
};

export default Projects;
