import React, { useContext } from 'react';
import styled from 'styled-components';
import { db } from '../../services/firebase/config';
import { theme } from '../../themes/GlobalTheme';
import { ThemeContext } from '../../context/ThemeContext';

const Item = styled.div`
    width: 90%;
    min-height: 100px;
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.secondary};
    padding: 10px;
    margin-top: 20px;
    border-radius: ${theme.properties.radiusSmall};

    @media (min-width: 700px) {
        width: 50%;
    }
`
const TitleWrapper = styled.div`
    display: flex;
`
const Title = styled.p`
    color: ${theme.colors.accent};
    flex: 2;
    margin: 0;
    font-size: ${theme.fonts.l};
    font-weight: 700;
`
const Delete = styled.button`
    border: 0;
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    color:  ${theme.colors.delete};
    transition: all .3s ease-in-out;
    font-weight: 900;
    border-radius: ${theme.properties.radiusSmall};
    cursor: pointer;

    &:hover {
        background-color: ${({ currentTheme }) => theme[currentTheme].colors.secondary};
    }
`
const Year = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    color: ${theme.colors.syntax};
    font-size: ${theme.fonts.s};
    margin: 0;
`
const DetailsWrapper = styled.div`
    display: flex;
    justify-content: left;
`
const Duration = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    margin-right: 30px;
    padding: 10px;
    border-radius: ${theme.properties.radiusSmall};
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    font-weight: 700;
`
const Genres = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    padding: 10px;
    border-radius: ${theme.properties.radiusSmall};
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    font-weight: 700;
`


const deleteFromList = (title, docs) => {
    for(const doc of docs) {
        if(doc[title]) {
            const id = doc[title];
            db.collection('movies').doc(id).delete();
        }
    }
} 

const WatchListItem = ({ title, year, duration, genres, docs }) => {
    const {currentTheme} = useContext(ThemeContext);

    return (
        <Item currentTheme={currentTheme}>
            <TitleWrapper>
                <Title>
                    {title}
                </Title>
                <Delete currentTheme={currentTheme} onClick={() => deleteFromList(title, docs)}>
                    DELETE
                </Delete>
            </TitleWrapper>
            <Year currentTheme={currentTheme}>
                {year}
            </Year>
            <DetailsWrapper>
                <Duration currentTheme={currentTheme}>
                    {duration}
                </Duration>
                <Genres currentTheme={currentTheme}>
                    {genres}
                </Genres>
            </DetailsWrapper>
        </Item>
        
    );
}
 
export default WatchListItem;