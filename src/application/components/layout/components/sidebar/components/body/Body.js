import React from 'react';
import Profile from './components/profile';
import Navigation from './components/navigation';
import { Wrapper } from './Body.syled';
import SocialMediaMenu from './components/social-media-menu';

const Body = ({ ...props }) => {
  return (
    <Wrapper>
      <Profile />
      <SocialMediaMenu />
      <Navigation {...props} />
    </Wrapper>
  );
};

export default Body;
