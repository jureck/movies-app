import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import { ThemeContext } from '../../context/ThemeContext';

const Error = styled.p`
    font-size: 20vw;
    color: ${({ currentTheme }) => theme[currentTheme].colors.altSyntax};
    width: 100%;
    height: 400px;
    text-align: center;
    margin: 0;
`

const NotFound = () => {
    const {currentTheme} = useContext(ThemeContext);
    return ( 
        <Error currentTheme={currentTheme}>404</Error>
    );
}
export default NotFound;