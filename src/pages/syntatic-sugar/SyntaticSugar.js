import React, { useEffect } from 'react';
import FlippedCardWithTheme from '../../common/components/flipped-card-with-theme/FlippedCard';
import TipsAndTricks1 from './components/posts/tipsAndTricks/TipsAndTricks1';
import TipsAndTricks2 from './components/posts/tipsAndTricks/TipsAndTricks2';
import TipsAndTricks3 from './components/posts/tipsAndTricks/TipsAndTricks3';
import NotesAndSchemas1 from './components/posts/NotesAndSchemas/NotesAndSchemas1';
import NotesAndSchemas2 from './components/posts/NotesAndSchemas/NotesAndSchemas2';
import NotesAndSchemas3 from './components/posts/NotesAndSchemas/NotesAndSchemas3';
import CodeAndMore1 from './components/posts/codeAndMore/CodeAndMore1';
import CodeAndMore2 from './components/posts/codeAndMore/CodeAndMore2';
import CodeAndMore3 from './components/posts/codeAndMore/CodeAndMore3';
import {
  ContainerProjects, PageTitle, Wrapper, Column, Color,
} from './SyntaticSugar.styled';

const SyntaticSugar = ({ showView }) => {
  useEffect(() => {
    if (window.instgrm && showView) {
      window.instgrm.Embeds.process();
    }
  }, [showView]);

  return (
    <Wrapper showView={showView}>
      <PageTitle>
        Feel free to follow me on <Color>Instagram</Color>
      </PageTitle>
      <ContainerProjects>
        <Column>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="0">
            <div data-cursor="pointer"><TipsAndTricks1 /></div>
            <div data-cursor="pointer"><TipsAndTricks1 /></div>
          </FlippedCardWithTheme>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="0.75">
            <div data-cursor="pointer"><TipsAndTricks2 /></div>
            <div data-cursor="pointer"><TipsAndTricks2 /></div>
          </FlippedCardWithTheme>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="1.5">
            <div data-cursor="pointer"><TipsAndTricks3 /></div>
            <div data-cursor="pointer"><TipsAndTricks3 /></div>
          </FlippedCardWithTheme>
        </Column>
        <Column>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="0.25">
            <div data-cursor="pointer"><NotesAndSchemas1 /></div>
            <div data-cursor="pointer"><NotesAndSchemas1 /></div>
          </FlippedCardWithTheme>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="1">
            <div data-cursor="pointer"><NotesAndSchemas2 /></div>
            <div data-cursor="pointer"><NotesAndSchemas2 /></div>
          </FlippedCardWithTheme>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="1.75">
            <div data-cursor="pointer"><NotesAndSchemas3 /></div>
            <div data-cursor="pointer"><NotesAndSchemas3 /></div>
          </FlippedCardWithTheme>
        </Column>
        <Column>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="0.5">
            <div data-cursor="pointer"><CodeAndMore1 /></div>
            <div data-cursor="pointer"><CodeAndMore1 /></div>
          </FlippedCardWithTheme>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="1.25">
            <div data-cursor="pointer"><CodeAndMore2 /></div>
            <div data-cursor="pointer"><CodeAndMore2 /></div>
          </FlippedCardWithTheme>
          <FlippedCardWithTheme radius="3px" fullWidthOnMobile width="100%" height="645px" delay="2">
            <div data-cursor="pointer"><CodeAndMore3 /></div>
            <div data-cursor="pointer"><CodeAndMore3 /></div>
          </FlippedCardWithTheme>
        </Column>
      </ContainerProjects>

    </Wrapper>
  );
};

export default SyntaticSugar;
