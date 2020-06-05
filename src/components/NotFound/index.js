import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';

const Error = styled.p`
    font-size: 20vw;
    color: ${theme.colors.darkerLight};
    width: 100%;
    height: 400px;
    text-align: center;
    margin: 0;
`

const NotFound = () => {
    return ( 
        <Error>404</Error>
    );
}
export default NotFound;