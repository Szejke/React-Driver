import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

addDecorator((storyFn) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </>
  );
});
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
