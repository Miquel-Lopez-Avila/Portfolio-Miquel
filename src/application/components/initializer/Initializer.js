import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InitialLoader from '../../../common/components/initial-loader/InitialLoader';
import { RelativeContainer } from './Initializer.styled';

function Initializer({ children }) {
  useEffect(() => {
    document.body.style.margin = '0px';
  }, []);

  return (
    <RelativeContainer>
      {children}
    </RelativeContainer>
  );
}

Initializer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Initializer;
