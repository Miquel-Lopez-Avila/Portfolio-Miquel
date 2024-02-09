import React from 'react';
import { useTheme } from 'styled-components';
// import Esp from '../../application/assets/flags/flag-esp.png';
// import Cat from '../../application/assets/flags/flag-cat.png';
// import Uk from '../../application/assets/flags/uk-flag.png';
import Telescope from '../../application/assets/presentation-icons/telescope.svg';
import satelite from '../../application/assets/presentation-icons/satelite.svg';
import molino from '../../application/assets/presentation-icons/molino-de-viento.svg';
import infinito from '../../application/assets/presentation-icons/infinito.svg';
// import FlippedCardWithTheme from '../../common/components/flipped-card-with-theme/FlippedCard';
import {
  Wrapper, ContainerContent, ContainerLanguages, Languages, ImgFlag, WrapperQuotes, Author,
  ContainerQuotes,
  Telescopio,
  Sentence, Color, Infinito, Molino, Satelite,
} from './Presentation.styled';

const Presentation = ({ showView }) => {
  const theme = useTheme();

  return (
    <Wrapper showView={showView}>
      <ContainerContent>
        <ContainerLanguages />
        <WrapperQuotes>
          <ContainerQuotes>
            <Sentence>"I always thought that <Color>my dreams</Color> were too big for this world, so <Color>I decided to look up to the sky</Color>"</Sentence>
            <Author>— Me</Author>
            <Molino src={satelite} />
            <Satelite src={Telescope} />
            <Telescopio src={molino} />
            <Infinito src={infinito} />
          </ContainerQuotes>
        </WrapperQuotes>
      </ContainerContent>
    </Wrapper>
  );
};

export default Presentation;
