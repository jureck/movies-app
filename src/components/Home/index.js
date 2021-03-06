import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import MainPage from './MainPage';
import Menu from '../Menu/index';
import { apiAddress, apiKey } from '../../services/api/config'; 
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
   margin-top: 100px;
`

const Home = () => {
    const {currentTheme} = useContext(ThemeContext);
    
    const getDataFromApi = async (title) => {
        const movieTitle = title;
        const response = await fetch(`${apiAddress}?apikey=${apiKey}&?&t=${movieTitle}`);
        const result = await response.json();
        return result;
    }    

    return ( 
        <Main>
            <Menu 
                current="Home"
            />
            <HeaderText currentTheme={currentTheme}>
                Start searching
            </HeaderText>
            <MainPage getDataFromApi={getDataFromApi} />
        </Main>
    );
}
 
export default Home;