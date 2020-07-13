import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  replaceBodyHTMLString(renderToString(bodyComponent));

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(sheet.collectStyles(bodyComponent));
  const styleElement = sheet.getStyleElement();
  setHeadComponents(styleElement);
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
