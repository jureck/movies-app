import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import SearchBar from './SearchBar';
import Menu from '../Menu/index';
import { apiAddress, apiKey } from '../../services/api/config';
import { v1 as uuid } from 'uuid';
import { ThemeContext } from '../../context/ThemeContext';

const Main = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`
const HeaderText = styled.p`
   font-size: ${theme.fonts.xl};
   color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
   text-align: center;
`
const getDataFromApi = async (title) => {
    const movieTitle = title;
    const response = await fetch(`${apiAddress}${apiKey}&?&t=${movieTitle}`);
    const result = await response.json();
    return result;
}

const Home = () => {
    const {currentTheme} = useContext(ThemeContext);

    useEffect(() => {
        if(!localStorage.getItem("uid")) {
            const uid = uuid();
            localStorage.setItem("uid", uid);
        }

    }, []);

    return ( 
        <Main>
            <Menu 
                current="Home"
            />
            <HeaderText currentTheme={currentTheme}>
                Start searching
            </HeaderText>
            <SearchBar getDataFromApi={getDataFromApi} />
        </Main>
    );
}
 
export default Home;