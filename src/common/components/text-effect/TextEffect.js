import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { Wrapper, Color, Text } from './TextEffect.styled';

const TextEffect = ({ texts, initialWord }) => {
  return (
    <Wrapper>
      {initialWord}
      <Color>
        <Typewriter
          options={{
            strings: texts,
            autoStart: true,
            loop: true,
          }}
        />
      </Color>
    </Wrapper>

  );
};

TextEffect.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  texts: PropTypes.array.isRequired,
  initialWord: PropTypes.string.isRequired,
};

export default TextEffect;
