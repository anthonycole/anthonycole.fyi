import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './text.css';

const Heading = ({ children, as = 'span', size, color }) => {
  return (
    <Text as={as} size={size} color={color}>
      {children}
    </Text>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
  color: PropTypes.string,
};

export default Heading;
