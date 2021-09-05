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
const Sitename = styled.p`
    font-family: 'Unlock';
    height: 80px;
    line-height: 80px;
    display: block;
    color: #d30303ee;
    font-size: 60px;
    text-transform: uppercase;
    position: absolute;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    
    @media (max-width: 900px) {
        font-size: 40px;
        line-height: 50px;
        height: 60px;
    }
    @media (max-width: 400px) {
        font-size: 30px;
        line-height: 50px;
        height: 60px;
    }
    @media (max-width: 300px) {
        font-size: 20px;
        line-height: 50px;
        height: 60px;
    }
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
            <Menu />
            <Sitename currentTheme={currentTheme}>
                movies-app   
            </Sitename>
            <HeaderText currentTheme={currentTheme}>
                Start searching
            </HeaderText>
            <MainPage getDataFromApi={getDataFromApi} />
        </Main>
    );
}
 
export default Home;