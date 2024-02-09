import React from 'react';
import PropTypes from 'prop-types';
import { Mask, Wrapper } from './Icon.styled';

const Icon = ({
  url,
  className,
  size,
  width,
  height,
  color,
  justifyContent,
  mediaIcon,
  opacity,
  rotate,
  themeChanged,
}) => {
  return (
    <Wrapper className={className} mediaIcon={mediaIcon} themeChanged={themeChanged} justifyContent={justifyContent}>
      <Mask
        mask={url}
        width={width}
        height={height}
        size={size}
        color={color}
        opacity={opacity}
        rotate={rotate}
      />
    </Wrapper>
  );
};

Icon.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  mediaIcon: PropTypes.bool,
  opacity: PropTypes.string,
  rotate: PropTypes.string,
  themeChanged: PropTypes.bool,
};

export default Icon;
