// import {defineCustomElements} from '../../../dist/packages/core-components/loader';

// defineCustomElements();

import { defineCustomElements } from '@nx-angular-stencil-storybook/core-components/loader';

defineCustomElements();


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}