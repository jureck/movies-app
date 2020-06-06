import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { theme } from '../themes/GlobalTheme';

const Style = createGlobalStyle`
  html {
    background-color: ${({currentTheme}) => theme[currentTheme].colors.primary};
  }

  button, input {
    font-family: 'Roboto', sans-serif;
  }
`

const GlobalStyle = () => {
    const {currentTheme} = useContext(ThemeContext);

    return ( 
        <Style currentTheme={currentTheme} />
    );
}
 
export default GlobalStyle;