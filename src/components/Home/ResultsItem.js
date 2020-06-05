import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import CheckImg from '../../assets/icons/check.svg';
import { db } from '../../services/firebase/config';

const Item = styled.div`
    display: ${({ isEmpty }) => isEmpty ? "none" : "flex" };
    width: 90%;
    min-height: 100px;
    background-color: ${theme.colors.secondary};
    padding: 10px;
    margin-top: 20px;
    border-radius: ${theme.properties.radiusSmall};

    @media (min-width: 700px) {
        width: 70%;
    }
`
const TextWrapper = styled.div`
    height: 100%;
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
const Poster = styled.img`
    display: block;
    margin: 5px 10px 5px 5px;
    height: 90px;

    @media (min-width: 700px) {
        height: 400px;
    }
`
const Rate = styled.p`
    color: ${theme.colors.accent};
    margin: 15px 0px;
    font-size: ${theme.fonts.s};
    border: 1px solid ${theme.colors.accent};
    width: 70px;
    text-align: center;
    padding: 5px;
    border-radius: ${theme.properties.radiusSmall};
`

const Description = styled.p`
     color: ${theme.colors.light};
`
const Add = styled.button`
    display: ${({ isOnList }) => isOnList ? "none" : "block"};
    height: 30px;
    border: 0;
    background-color: ${theme.colors.secondary};
    color:  ${theme.colors.add};
    transition: all .3s ease-in-out;
    outline: none;

    &:hover {
        background-color: #202328;
    }
`
const Added = styled.p`
    display: ${({ isOnList }) => isOnList ? "block" : "none"};
    height: 25px;
    color:  ${theme.colors.add};
    margin: 0;
    margin-top: 5px;
    font-size: ${theme.fonts.xs};
`
const Check = styled.img`
    display: ${({ isOnList }) => isOnList ? "block" : "none"};
    padding-left: 2px;
    padding-top: 2px;
    height: 23px;
`
const Year = styled.p`
    color: ${theme.colors.darkerLight};
    font-size: ${theme.fonts.s};
    margin: 0;
`
const DetailsWrapper = styled.div`
    display: flex;
    justify-content: left;
`
const Duration = styled.p`
    color: ${theme.colors.darkerLight};
    margin: 0px;
    margin-right: 30px;
`
const Genres = styled.p`
    color: ${theme.colors.darkerLight};
    margin: 0px 0px;
`

const addToList = (movie, uid) => {
    const newItem = {
        [uid]: {
                title: movie.title,
                year: movie.year,
                duration: movie.duration,
                rate: movie.rate,
                genres: movie.genres,
                description: movie.description
        }
    };

    db.collection('movies').add(newItem);
}

const ResultsItem = ({ movie }) => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [isOnList, setIsOnList] = useState(false); 

    const {title, year, description, duration, genres, rate} = movie;
    const uid = localStorage.getItem("uid");

    useEffect(() => {
        if(!title) {
            setIsEmpty(true);
        }
        
        const res = db.collection('movies').onSnapshot(snapshot => {
            if(snapshot.size) {
                const results = [];
                snapshot.forEach(doc => {
                        if(doc.data()[uid]) {
                            results.push(doc.data()[uid].title);
                        }
                    }
                );
                if(results.length) {
                    const onList = results.includes(title);
                    setIsOnList(onList);
                }
            }
        });   
        
        return () => {
            res();
        }

    }, [title, uid]);

    return ( 
        <Item isEmpty={isEmpty}>
            <Poster src={movie.img}/>
            <TextWrapper>
                <TitleWrapper>
                    <Title>
                        {title}
                    </Title>
                    <Add isOnList={isOnList} onClick={() => addToList(movie, uid)}>
                        ADD TO LIST
                    </Add>
                    <Added isOnList={isOnList}>
                        ADDED
                    </Added>
                    <Check 
                        src={CheckImg}
                        isOnList={isOnList}
                    />
                </TitleWrapper>
                <Year>
                    {year}
                </Year>
                <Rate>
                    {rate}
                </Rate>
                <DetailsWrapper>
                    <Duration>
                        {duration}
                    </Duration>
                    <Genres>
                        {genres}
                    </Genres>
                </DetailsWrapper>
                <Description>
                    {description}
                </Description>
            </TextWrapper>
        </Item>
    );
}
 
export default ResultsItem;