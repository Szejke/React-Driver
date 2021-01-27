import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { Provider } from 'react-redux';
import { theme } from 'theme/mainTheme';
import 'bootstrap/dist/css/bootstrap.css';
import store from 'redux/store';

addDecorator((storyFn) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </Provider>
  );
});
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
