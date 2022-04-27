import React from "react";
import { addDecorator } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from '../src/shared/global';

addDecorator(
  story => <Router>
    <GlobalStyle />
    {story()}
  </Router>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}