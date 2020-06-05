import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';

const Item = styled.a`
    text-decoration: none;
    width: 100%;
    height: 57px;
    color: ${theme.colors.light};
    font-size: ${theme.fonts.s};
    line-height: 57px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ current, name }) => current === name ? `${theme.colors.primary}` : "none"};

    &:first-child {
        margin-top: 80px;
    }

    &:hover {
        background-color: ${theme.colors.primary};
    }
`
const Icon = styled.img`
    height: 26px;
    margin: 0px 10px;
`
const Name = styled.p`
    height: 100%;
    margin: 0;
`

const MenuItem = ({ img, name, current, path }) => {

    return ( 
        <Item href={path} current={current} name={name}>
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