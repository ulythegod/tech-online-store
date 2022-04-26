import { addDecorator } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { initialize, mswDecorator } from 'msw-storybook-addon';

addDecorator(story => <Router>{story()}</Router>);

initialize();

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}