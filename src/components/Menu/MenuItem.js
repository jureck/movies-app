import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import { ThemeContext } from '../../context/ThemeContext';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

const Item = styled.li`
    width: 100%;
    height: 57px;
    margin: 0;
    cursor: pointer;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    font-size: ${theme.fonts.s};
    line-height: 57px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ current, name, currentTheme }) => current === name.toLowerCase() ? `${theme[currentTheme].colors.primary}` : "none" };
    font-weight: ${({ current, name }) => current === name ? "600" : "500"};
    transition: all .1s ease-in-out;

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
    const history = useHistory();
    const { signOut: logout } = useAuth();

    const handleClick = () => {
        if(signOut) {
            logout()
            .then(() => history.push('/'));
        } else {
            history.push(path);
        }
    }

    return (
        <Item
            onClick={handleClick}
            currentTheme={currentTheme}
            href={path}
            current={current === "" ? "home" : current}
            name={name}
        >
            <Icon src={require(`../../assets/icons/${img}`)} />
            <Name>{name}</Name>
        </Item>
    );
}
 
export default MenuItem;