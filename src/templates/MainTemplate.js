import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { lightTheme } from 'theme/lightTheme';
import { darkTheme } from 'theme/darkTheme';
import Header from 'components/organisms/Header/Header';

const MainTemplate = ({ children }) => {
  const [themeStyle, setThemeStyle] = useState(true);

  const handleThemeStyle = () => {
    setThemeStyle(!themeStyle);
  };

  return (
    <>
      <ThemeProvider theme={themeStyle ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header handleThemeStyle={handleThemeStyle} />
        {children}
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
