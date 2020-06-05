import React from 'react';
import styled from 'styled-components';
import { db } from '../../services/firebase/config';
import { theme } from '../../themes/GlobalTheme';

const Item = styled.div`
    width: 90%;
    min-height: 100px;
    background-color: ${theme.colors.secondary};
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
    font-size: ${theme.fonts.m};
`
const Delete = styled.button`
    border: 0;
    background-color: ${theme.colors.secondary};
    color:  ${theme.colors.delete};
    transition: all .3s ease-in-out;

    &:hover {
        background-color: #202328;
    }
`
const Year = styled.p`
    color: ${theme.colors.light};
    font-size: ${theme.fonts.s};
    margin: 0;
`
const DetailsWrapper = styled.div`
    display: flex;
    justify-content: left;
`
const Duration = styled.p`
    color: ${theme.colors.light};
    margin-right: 30px;
`
const Genres = styled.p`
    color: ${theme.colors.light};
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

    return (
        <Item>
            <TitleWrapper>
                <Title>
                    {title}
                </Title>
                <Delete onClick={() => deleteFromList(title, docs)}>
                    DELETE
                </Delete>
            </TitleWrapper>
            <Year>
                {year}
            </Year>
            <DetailsWrapper>
                <Duration>
                    {duration}
                </Duration>
                <Genres>
                    {genres}
                </Genres>
            </DetailsWrapper>
        </Item>
        
    );
}
 
export default WatchListItem;