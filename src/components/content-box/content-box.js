import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './content-box.css';

const ContentBox = ({ children }) => <Container>{children}</Container>;

ContentBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentBox;
