import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import { ThemeContext } from '../../context/ThemeContext';
import { auth } from '../../services/firebase/config';
import { basename } from '../../services/firebase/config';

const Item = styled.a`
    text-decoration: none;
    width: 100%;
    height: 57px;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    font-size: ${theme.fonts.s};
    line-height: 57px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ current, name, currentTheme }) => current === name ? `${theme[currentTheme].colors.primary}` : "none" };
    font-weight: ${({ current, name }) => current === name ? "600" : "500"};

    &:first-child {
        margin-top: 80px;
    }

    &:hover {
        background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    }
`
const Icon = styled.img`
    height: 26px;
    margin: 0px 20px;
`
const Name = styled.p`
    height: 100%;
    margin: 0;
`

const MenuItem = ({ img, name, current, path, signOut }) => {
    const {currentTheme} = useContext(ThemeContext);

    return ( 
        <Item onClick={signOut ? () => auth().signOut().then(() => window.location.href = `${basename}/`) : null} currentTheme={currentTheme} href={path} current={current} name={name} >
                <Icon
                    src={require(`../../assets/icons/${img}`)}
                />    
                <Name>
                    {name}
                </Name>
        </Item>
    );
}
 
export default MenuItem;