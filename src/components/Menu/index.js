import React, { useState } from 'react';
import styled from 'styled-components';
import { basename } from '../../App';
import { theme } from '../../themes/GlobalTheme';
import MenuItem from './MenuItem';

const MainMenu = styled.div`
    background-color: ${theme.colors.secondary};
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
    left: ${({ isOpen }) => isOpen ? "60%" : "-100%" };
    width: 40%;
    height: 100%;
    z-index: 100;
    transition: all .2s ease-in-out;
`
const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 50px;
    width: 100%;
`
const CurrentPage = styled.p`
    color: ${theme.colors.light};
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
`
const HamburgerInner = styled.div`
    width: 36px;
    height: 3px;
    margin-top: 15px;
    background-color: white;
    position: absolute;

    &::before, &::after {
        content: '';
        display: block;
        width: 36px;
        height: 3px;
        background-color: white;
        position: absolute;
    }

    &::before {
        margin-top: 7px;
    }

    &::after {
        margin-top: 14px;
    }
`

const Menu = ({ current }) => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
            <TopBar>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <HamburgerInner />
                </Hamburger>
                <CurrentPage>
                    {current}
                </CurrentPage>
                <MainMenu isOpen={isOpen}>
                    <MenuItem 
                        name="Home"
                        img="home.svg"
                        path={`${basename}/`}
                        current={current}
                    />
                    <MenuItem 
                        name="Watch list"
                        img="watch.svg"
                        path={`${basename}/#/watchlist/`}
                        current={current}
                    />
                </MainMenu>
                <MenuCloser 
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
            </TopBar>  
    );
}
 
export default Menu;