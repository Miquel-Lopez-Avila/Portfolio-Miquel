import React from 'react';
import useThemeState from '../../application/hooks/use-theme-state';
import useThemeChanged from '../../application/hooks/use-theme-changed';
import aire from '../../application/assets/images/aire-etworks.png';
import atresmedia from '../../application/assets/images/atresmedia.png';
import knowmadmood from '../../application/assets/images/knowmadmood.png';
import dention from '../../application/assets/images/dention.svg';
import {
  Wrapper,
  PageTitleDay,
  PageTitleNight,
  Color,
  RelativeContainer,
  ContainerConstellation,
  StarConstellation,
  Constellation, Line,
  RowConstellation,
  Logo,
} from './ProfessionalResume.styled';
import Icon from '../../common/components/icon';

const ProfessionalResume = ({ showView }) => {
  const [isLightMode] = useThemeState();
  const { isFirstTheme, themeChanged } = useThemeChanged();

  return (
    <Wrapper showView={showView}>
      <RelativeContainer>
        <PageTitleDay isLightMode={isLightMode} isFirstTheme={isFirstTheme} themeChanged={themeChanged}>
          Maybe you should come <Color>at night...</Color>
        </PageTitleDay>
        {!isFirstTheme && (
          <PageTitleNight isLightMode={isLightMode} isFirstTheme={isFirstTheme} themeChanged={themeChanged}>
            That's my <Color>professional history line until today</Color>
          </PageTitleNight>
        )}
      </RelativeContainer>
      {
        !isFirstTheme && (
          <ContainerConstellation isLightMode={isLightMode} themeChanged={themeChanged}>
            <RowConstellation justifyContent="center" width="40%">
              <Constellation width={350} height={200}>
                <Logo>
                  <Icon url={knowmadmood} height="61px" width="254px" color="#15b8a6" />
                  <Icon url={atresmedia} height="90px" width="210px" color="#15b8a6" />
                </Logo>
                <Line left={2} top={51} rotate={19} width={65} />
                <Line left={63} top={72} rotate={73} width={70} />
                <Line left={83} top={139} rotate={-39} width={91} />
                <Line left={153} top={27} rotate={90} width={56} />
                <Line left={231} top={52} rotate={-201} width={83} />
                <Line left={254} top={93} rotate={-174} width={101} />
                <StarConstellation left={0} top={50} topText={-20} leftText={-10} text="React" />
                <StarConstellation left={60} top={70} topText={10} leftText={-10} text="YARN" />
                <StarConstellation left={80} top={137} topText={10} leftText={-10} text="CI/CD" />
                <StarConstellation left={150} top={80} topText={10} leftText={-5} text="Jira" />
                <StarConstellation left={229} top={50} topText={-5} leftText={15} text="Cypress" />
                <StarConstellation left={250} top={91} topText={10} leftText={0} text="Jest" />
                <StarConstellation left={150} top={25} topText={-20} leftText={-5} text="Vite" />
              </Constellation>
            </RowConstellation>
            <RowConstellation justifyContent="end" width="100%">
              <Constellation width={350} height={200}>
                <Logo>
                  <Icon url={aire} height="95px" width="auto" color="#15b8a6" />
                </Logo>
                <Line left={2} top={2} rotate={12} width={95} />
                <Line left={92} top={22} rotate={2} width={110} />
                <Line left={103} top={152} rotate={-90} width={50} />
                <Line left={303} top={52} rotate={-166} width={103} />
                <Line left={102} top={102} rotate={-37} width={126} />
                <Line left={259} top={140} rotate={-63} width={97} />
                <Line left={259} top={139} rotate={-185} width={157} />
                <StarConstellation left={0} top={0} topText={-20} leftText={-10} text="React" />
                <StarConstellation left={90} top={20} topText={-25} leftText={-10} text="Redux saga" />
                <StarConstellation left={257} top={137} topText={10} leftText={0} text="Smart TV APP" />
                <StarConstellation left={100} top={150} topText={20} leftText={0} text="Typescript" />
                <StarConstellation left={300} top={50} topText={-20} leftText={0} text="CSS" />
                <StarConstellation left={100} top={100} topText={-5} leftText={-40} text="Scrum" />
                <StarConstellation left={200} top={25} topText={-20} leftText={-5} text="NPM" />
              </Constellation>
            </RowConstellation>
            <RowConstellation justifyContent="center" width="80%">
              <Constellation width={350} height={150}>
                <Logo>
                  <Icon url={dention} height="63px" width="300px" color="#15b8a6" />
                </Logo>
                <Line left={3} top={2} rotate={79} width={100} />
                <Line left={23} top={102} rotate={-67} width={77} />
                <Line left={103} top={102} rotate={-125} width={86} />
                <Line left={303} top={52} rotate={-166} width={103} />
                <Line left={102} top={102} rotate={-37} width={126} />
                <Line left={252} top={102} rotate={-44} width={72} />
                <Line left={54} top={32} rotate={-2} width={149} />
                <StarConstellation left={0} top={0} topText={-25} leftText={-10} text="React" />
                <StarConstellation left={20} top={100} topText={15} leftText={-10} text="Next.js" />
                <StarConstellation left={50} top={30} topText={-25} leftText={-10} text="Node.js" />
                <StarConstellation left={100} top={100} topText={10} leftText={-10} text="Jest" />
                <StarConstellation left={250} top={100} topText={10} leftText={-10} text="Redux" />
                <StarConstellation left={300} top={50} topText={-15} leftText={10} text="Styled-components" />
                <StarConstellation left={200} top={25} topText={-25} leftText={-10} text="Docker" />
              </Constellation>
            </RowConstellation>
          </ContainerConstellation>
        )
      }
    </Wrapper>
  );
};

export default ProfessionalResume;
