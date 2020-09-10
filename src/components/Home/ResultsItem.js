import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import CheckImg from '../../assets/icons/check.svg';
import { db } from '../../services/firebase/config';
import { ThemeContext } from '../../context/ThemeContext';

const Item = styled.div`
    display: ${({ isEmpty }) => isEmpty ? "none" : "flex" };
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
const TextWrapper = styled.div`
    height: 100%;
    width: 100%;
`
const TitleWrapper = styled.div`
    display: flex;
`
const Title = styled.p`
    color: ${theme.colors.accent};
    flex: 3;
    margin: 0;
    font-weight: 700;
    font-size: ${theme.fonts.xl};
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
    border: 3px solid ${theme.colors.accent};
    width: 70px;
    text-align: center;
    padding: 5px;
    font-weight: 700;
    border-radius: ${theme.properties.radiusSmall};
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
`

const Description = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    padding: 20px 10px;
    border-radius: ${theme.properties.radiusSmall};
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    font-weight: 700;
    font-size: ${theme.fonts.s};
`
const Add = styled.button`
    font-weight: 700;
    display: ${({ isOnList }) => isOnList ? "none" : "block"};
    height: 30px;
    border: 0;
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    color:  ${theme.colors.add};
    transition: all .3s ease-in-out;
    outline: none;
    font-weight: 700;
    cursor: pointer;
    font-size: ${theme.fonts.xs};
    border-radius: ${theme.properties.radiusSmall};

    &:hover {
        background-color: ${({ currentTheme }) => theme[currentTheme].colors.secondary};
    }
`
const Added = styled.p`
    font-weight: 700;
    display: ${({ isOnList }) => isOnList ? "block" : "none"};
    height: 25px;
    color:  ${theme.colors.add};
    margin: 0;
    margin-top: 5px;
    font-size: ${theme.fonts.s};
`
const Check = styled.img`
    display: ${({ isOnList }) => isOnList ? "block" : "none"};
    padding-left: 2px;
    padding-top: 2px;
    height: 25px;
`
const Year = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.altSyntax};
    font-size: ${theme.fonts.s};
    margin: 0;
`
const DetailsWrapper = styled.div`
    display: flex;
    justify-content: left;
`
const Duration = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.altSyntax};
    margin: 0px;
    margin-right: 30px;
    padding: 10px;
    border-radius: ${theme.properties.radiusSmall};
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    font-weight: 700;
`
const Genres = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.altSyntax};
    margin: 0px 0px;
    padding: 10px;
    border-radius: ${theme.properties.radiusSmall};
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    font-weight: 700;
`
const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`

const addToList = (movie, uid, isSignedIn, setErrorMessage) => {
    if(isSignedIn) {
        const newItem = {
            [uid]: {
                    title: movie.title,
                    year: movie.year,
                    duration: movie.duration,
                    rate: movie.rate,
                    genres: movie.genres,
                    description: movie.description,
                    addedAt: Date.now()
            }
        };
    
        db.collection('movies').add(newItem);
    } else {
        setErrorMessage("You must be logged in to do that");
    }
    
}

const ResultsItem = ({ movie, isSignedIn, uid }) => {
    const {currentTheme} = useContext(ThemeContext);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isOnList, setIsOnList] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('');
    const {title, year, description, duration, genres, rate} = movie;
    
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
        <>

        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Item isEmpty={isEmpty} currentTheme={currentTheme} >
            <Poster src={movie.img}/>
            <TextWrapper>
                <TitleWrapper>
                    <Title>
                        {title}
                    </Title>
                    <Add 
                        currentTheme={currentTheme} 
                        isOnList={isOnList} 
                        onClick={() => addToList(movie, uid, isSignedIn, setErrorMessage)}
                    >
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
                <Year currentTheme={currentTheme}>
                    {year}
                </Year>
                <Rate currentTheme={currentTheme}>
                    {rate}
                </Rate>
                <DetailsWrapper>
                    <Duration currentTheme={currentTheme}>
                        {duration}
                    </Duration>
                    <Genres currentTheme={currentTheme}>
                        {genres}
                    </Genres>
                </DetailsWrapper>
                <Description currentTheme={currentTheme}>
                    {description}
                </Description>
            </TextWrapper>
        </Item>

        </>
    );
}
 
export default ResultsItem;