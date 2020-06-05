import React, { useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import SearchBar from './SearchBar';
import Menu from '../Menu/index';
import { apiAddress, apiKey } from '../../services/api/config';
import { v1 as uuid } from 'uuid';

const Main = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`
const HeaderText = styled.p`
   font-size: ${theme.fonts.xl};
   color: ${theme.colors.accent};
   text-align: center;
`
const getDataFromApi = async (title) => {
    const movieTitle = title;
    const response = await fetch(`${apiAddress}${apiKey}&?&t=${movieTitle}`);
    const result = await response.json();
    return result;
}

const Home = () => {
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
            <HeaderText>
                Start searching
            </HeaderText>
            <SearchBar getDataFromApi={getDataFromApi} />
        </Main>
    );
}
 
export default Home;