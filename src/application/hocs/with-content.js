import React from 'react';
import Content from '../components/layout/components/content';

const withContent = Component => props => {
  return (
    <Content>
      <Component {...props} />
    </Content>
  );
};

export default withContent;
