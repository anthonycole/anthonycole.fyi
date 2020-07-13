import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/anthonyccole/">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/anthonycole">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
