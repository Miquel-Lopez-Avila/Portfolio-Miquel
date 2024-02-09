import React, { useEffect, useState } from 'react';
import caricature from '../../../../../../../../assets/images/caricature_dark.png';
import location from '../../../../../../../../assets/icons/location-sharp.svg';
import fog from '../../../../../../../../assets/images/fog.svg';
import fog2 from '../../../../../../../../assets/images/fog2.svg';
import bird from '../../../../../../../../assets/gifs/bird.gif';
import { fogVariants } from '../../../../../../../../config/theme';
import FlippedCardWithTheme from '../../../../../../../../../common/components/flipped-card-with-theme/FlippedCard';
import Icon from '../../../../../../../../../common/components/icon';
import TypeWriteEffect from '../../../../../../../../../common/components/text-effect';
import useThemeChanged from '../../../../../../../../hooks/use-theme-changed';
import {
  Name,
  ProfileContainer,
  LocationText,
  LocationWrapper,
  AvatarContainer,
  Fog,
  Info,
  RelativeContainer,
  LightImage,
  DarknessImage, Bird,
} from './Profile.styled';

const Profile = () => {
  const { isFirstTheme } = useThemeChanged();

  return (
    <ProfileContainer>
      <AvatarContainer>
        <FlippedCardWithTheme radius="50%" width="100px" height="100px">
          <div>
            <DarknessImage src={caricature} />
          </div>
          <div>
            <LightImage src={caricature} />
          </div>
        </FlippedCardWithTheme>
        {!isFirstTheme && <Fog url={fog2} top="30%" left="70%" size="50px" color={fogVariants.blue} index={2} />}
        {!isFirstTheme && <Fog url={fog} top="10%" left="-35%" size="60px" color={fogVariants.blue} isLeft index={4} addClipPath />}
        {!isFirstTheme && <Fog url={fog} top="80%" left="20%" width="50px" color={fogVariants.gray} isLeft index={4} addClipPath />}
      </AvatarContainer>
      <Info>
        <RelativeContainer>
          <Bird src={bird} />
          <Name>Miquel López Ávila</Name>
        </RelativeContainer>
        <TypeWriteEffect texts={['Frontend Dev', 'Digital Creator', 'UI / UX', 'Full Stack Dev']} initialWord={"I'm"} />
        <LocationWrapper>
          <Icon url={location} size="18px" />
          <LocationText>Barcelona, Spain</LocationText>
        </LocationWrapper>
      </Info>
    </ProfileContainer>
  );
};

export default Profile;
