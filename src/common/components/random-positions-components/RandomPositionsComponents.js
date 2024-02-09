import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, AbsoluteContainer } from './RandomPositionsComponents.styled';

const RandomPositionsComponents = ({ elements }) => {
  const generateRandomPositionInScreen = () => {

  };

  return (
    <Wrapper>
      {elements.map(element => {
        const { top, left } = generateRandomPositionInScreen();

        return (
          <AbsoluteContainer top={top} left={left}>{element}</AbsoluteContainer>
        );
      })}
    </Wrapper>
  );
};

RandomPositionsComponents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  elements: PropTypes.array.isRequired,
};

export default RandomPositionsComponents;
