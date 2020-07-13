import React from 'react';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return element;
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
