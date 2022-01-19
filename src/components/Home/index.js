import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import MainPage from './MainPage';
import Menu from '../Menu/index';
import { auth } from '../../services/firebase/config';
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
    font-family: Unlock;
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
    const [uid, setUid] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    React.useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if(user) {
                if(user.uid) {
                    setUid(user.uid);
                    setIsSignedIn(true);
                }
            }
        });
    }, []);

    return ( 
        <Main>
            <Menu />
            <Sitename currentTheme={currentTheme}>
                movies-app   
            </Sitename>
            <HeaderText currentTheme={currentTheme}>
                Start searching
            </HeaderText>
            <MainPage uid={uid} isSignedIn={isSignedIn} />
        </Main>
    );
}
 
export default Home;