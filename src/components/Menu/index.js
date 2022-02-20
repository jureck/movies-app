import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import MenuItem from './MenuItem';
import { ThemeContext } from '../../context/ThemeContext';
import SunImg from '../../assets/icons/light.svg';
import MoonImg from '../../assets/icons/dark.svg';
import User from '../../assets/icons/user.svg';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MainMenu = styled.div`
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.secondary};
    width: 60%;
    height: 100%;
    position: fixed;
    left: ${({ isOpen }) => isOpen ? "0" : "-100%" };
    top: 0;
    z-index: 100;
    transition: all .4s ease-out;

    @media (min-width: 700px) {
        width: 250px;
    }
`
const MenuCloser = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => isOpen ? "0" : "-100%" };
    width: 100%;
    height: 100%;
    z-index: 99;
    transition: all .2s ease-in-out;
`
const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 50px;
    width: 100%;
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
`
const CurrentPage = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    font-size: ${theme.fonts.m};
    font-weight: 700;
    height: 50px;
    margin: 0;
    line-height: 50px;
`
const Hamburger = styled.div`
    width: 36px;
    height: 50px;
    position: relative;
    margin: 0px 20px 0px 10px;
    z-index: 10;
    cursor: pointer;
`
const HamburgerInner = styled.div`
    width: 36px;
    height: 3px;
    margin-top: 15px;
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    position: absolute;

    &::before, &::after {
        content: '';
        display: block;
        width: 36px;
        height: 3px;
        background-color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
        position: absolute;
    }

    &::before {
        margin-top: 7px;
    }

    &::after {
        margin-top: 14px;
    }
`
const ThemeImg = styled.img`
    display: inline-block;
    margin-left: 10px;
    position: absolute;
    top: 18px;
`
const ThemeSwitcher = styled.div`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    position: absolute;
    bottom: 0;
    font-weight: 700;
    left: 0;
    width: 90%;
    text-align: center;
    height: 60px;
    cursor: pointer;
    line-height: 60px;
`
const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: ${({ currentTheme }) => theme[currentTheme].colors.altSyntax};
    margin: 15px 0px;
`
const UserInfo = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`
const UserImg = styled.img`
    height: 26px;
    margin: 12px 20px;
`
const Name = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    font-size: ${theme.fonts.s};
    font-weight: 500;
    width: 60%;
`

const Menu = () => {
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const { isSignedIn, username } = useAuth();
    const history = useHistory();
    let current = history.location.pathname.split('-').join(' ').slice(1);

    const ToggleTheme = (currentTheme, setCurrentTheme) => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setCurrentTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return ( 
      
        <TopBar currentTheme={currentTheme}>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <HamburgerInner currentTheme={currentTheme}/>
            </Hamburger>
            <CurrentPage currentTheme={currentTheme} >
                {current}
            </CurrentPage>
            <MainMenu currentTheme={currentTheme} isOpen={isOpen}>
                <MenuItem 
                    onClick={() => setIsOpen(!isOpen)}
                    name="Home"
                    img="home.svg"
                    path="/"
                    current={current}
                />
                {isSignedIn && <MenuItem
                    onClick={() => setIsOpen(!isOpen)} 
                    name="Watch list"
                    img="watch.svg"
                    path="/watch-list"
                    current={current}
                    />
                }
                
                <Separator currentTheme={currentTheme} />
                    {isSignedIn ?
                        <>
                            <UserInfo>
                                <UserImg src={User}/>
                                <Name currentTheme={currentTheme}>{username}</Name>
                            </UserInfo>
                            <MenuItem
                                name="Sign out"
                                img="signout.svg"
                                path="/"
                                current={current}
                                signOut
                            />
                        </>
                        :
                        <>
                            <MenuItem
                                name="Sign in"
                                img="signin.svg"
                                path="/sign-in"
                                current={current}
                            />
                            <MenuItem
                                name="Sign up"
                                img="signup.svg"
                                path="/sign-up"
                                current={current}
                            />
                        </>

                    }        
                        
                <ThemeSwitcher onClick={() => ToggleTheme(currentTheme, setCurrentTheme)} currentTheme={currentTheme}>
                    Toggle theme
                    {currentTheme === "light" ? 
                        <ThemeImg src={MoonImg}/> 
                            :
                        <ThemeImg src={SunImg}/> 
                    }
                    
                </ThemeSwitcher>       
            </MainMenu>
            <MenuCloser 
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
            />
        </TopBar>
    );
}
 
export default Menu;