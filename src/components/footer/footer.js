import React from 'react';
import PropTypes from 'prop-types';
import { FooterContainer } from './footer.css';

const Footer = ({ children }) => <FooterContainer>{children}</FooterContainer>;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
