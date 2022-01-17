import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search.svg';
import NoPoster from '../../assets/icons/noPoster.png';
import ResultsItem from './ResultsItem';
import { theme } from '../../themes/GlobalTheme';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { ThemeContext } from '../../context/ThemeContext';
import { db } from '../../services/firebase/config';
import { apiAddress, apiKey } from '../../services/api/config'; 

const SearchBlock = styled.div`
    width: 80%;
    height: 45px;
    position: relative;

    @media (min-width: 1000px) {
        width: 40%;
    }
`
const SearchInput = styled.input`
    height: 100%;
    border: 0px;
    width: 100%;
    background-color: "#FFFFFF";
    border-radius: ${theme.properties.radiusBig};
    outline: none;
    padding: 10px;
    font-size: 20px;

    &:focus {
        border: 2px solid #1394eb;
    }
`
const SearchButton = styled.button`
    height: 100%;
    width: 70px;
    position: absolute;
    border: 0px;
    right: 0;
    background-color: ${theme.colors.accent};
    border-radius: ${theme.properties.radiusBig};
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: ${theme.colors.accentAlt};
    }

`
const SearchImg = styled.img`
    width: 25px;
`
const Form = styled.form`
    height: 45px;
`
const Error = styled.div`
    width: 100%;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    text-align: center;
    font-size: ${theme.fonts.l};
    margin-top: 100px;
    margin-bottom: 200px;
`

const RecentlySearched = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 1000px;
    margin-bottom: 200px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    @media (max-width: 1050px) {
        width: 90%;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

const RecentlyHeader = styled.header`
    width: 980px;
    text-align: left;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    font-size: ${theme.fonts.xl};
    font-weight: 700;
    margin-bottom: 15px;
    margin-top: 100px;


    @media (max-width: 1050px) {
        width: calc(90% - 20px);
    }

    @media (max-width: 600px) {
        font-size: ${theme.fonts.l};
    }
`

const RecentlySearchedItem = styled.article`
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    flex: 0 0 auto;
    width: 230px;
    min-height: 402px;

    @media (max-width: 1050px) {
        width: 31%;
    }

    @media (max-width: 650px) {
        width: 36vw;
    }

`

const ItemPoster = styled.img`
    display: block;
    height: 340px;
    width: 100%;
    cursor: pointer;
    transition: all .1s ease-out;

    &:hover {
        transform: scale(1.02);
    }

    @media (max-width: 1050px) {
        height: 40vw;
    }

    @media (max-width: 650px) {
        height: 50vw;
    }
`

const ItemTitle = styled.p`
    color: ${theme.colors.accent};
    font-size: ${theme.fonts.m};
    margin: 5px 0px;

    @media (max-width: 650px) {
        font-size: ${theme.fonts.s};
    }
`

const ItemYear = styled.p`
    color: ${({ currentTheme }) => theme[currentTheme].colors.altSyntax};
    margin: 0px;
    font-size: ${theme.fonts.s};
`

const MainPage = ({ uid, isSignedIn}) => {

    const loader = <Loader type="TailSpin" color={theme.colors.accent} height={200} width={100} timeout={3000} />;
    const {currentTheme} = useContext(ThemeContext);

    const [title, setTitle] = useState('');
    const [movie, setMovie]= useState({
        title: '',
        year: '',
        rate: '',
        duration: '',
        genres: '',
        description: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isMovieFound, setIsMovieFound] = useState(true);
    const [searched, setSearched] = useState([]);

    const getDataFromApi = async (title) => {
        const response = await fetch(`${apiAddress}?apikey=${apiKey}&?&t=${title}`);
        const result = await response.json();
        return result;
    }    

    const handleSubmit = async (e, title, uid) => {
        setIsLoading(true);
        e.preventDefault();
        const result = await getDataFromApi(title);
        if(result.Response === "True") {
            setMovie({
                title: result.Title,
                year: result.Year,
                rate: result.Ratings.length > 0 ? result.Ratings[0].Value : "N/A",
                duration: result.Runtime,
                genres: result.Genre,
                description: result.Plot,
                img: result.Poster === "N/A" ? NoPoster : result.Poster,
            });
            setIsMovieFound(true);
    
            const recentMovie = {
                [uid]: {
                    title: result.Title,
                    img: result.Poster === "N/A" ? NoPoster : result.Poster,
                    year: result.Year,
                },
                addedAt: Date.now(),
            }
            const recentMovies = await db.collection('history')
                                        .orderBy("addedAt", "desc")
                                        .limit(10)
                                        .get();
            const lastOfRecent = recentMovies.docs.map(doc => doc.data()[uid]?.title).filter(title => title !== undefined)[0];
            if(uid && lastOfRecent !== result.Title) {
                db.collection('history').add(recentMovie);
            }
        } else {
            setIsMovieFound(false);
        }
        setIsLoading(false);
    }

    
    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    React.useEffect(() => { 
        const res = db.collection('history').orderBy("addedAt", "desc").limit(4).onSnapshot(snapshot => {
            if(snapshot.size) {
                let results = [];
                snapshot.forEach(doc => {
                        if(doc.data()[uid]) {
                            results.push({ 
                                title: doc.data()[uid].title, 
                                img: doc.data()[uid].img,
                                year: doc.data()[uid].year,  
                                addedAt: doc.data().addedAt,
                            });
                        }
                    }
                );
                if(results.length) {
                    setSearched(results);
                }
            }
        });   
        
        return () => {
            res();
        }

    }, [uid]);

    return ( 
        <>
            <SearchBlock>
                <Form onSubmit={(e) => handleSubmit(e, title, uid)}>
                    <SearchInput placeholder="Search" currentTheme={currentTheme} value={title} onChange={(e) => handleChange(e)}/>
                    <SearchButton>
                        <SearchImg src={SearchIcon} />
                    </SearchButton>
                </Form>
            </SearchBlock>
            { !isMovieFound && <Error currentTheme={currentTheme}> Nothing found :( </Error> }
            { isLoading && loader }
            { !isLoading && isMovieFound && <ResultsItem uid={uid} isSignedIn={isSignedIn} movie={movie} /> }
            { localStorage.getItem("uid") !== null && searched.length ? <RecentlyHeader  currentTheme={currentTheme}>Recently searched</RecentlyHeader> : null }
            { searched.length < 1 && localStorage.getItem("uid") !== null ? loader : null}
            <RecentlySearched>
                {searched.length > 0 && searched.map((movie) => 
                    <RecentlySearchedItem onClick={(e) => handleSubmit(e, movie.title, uid)} key={movie.addedAt}>
                        <ItemPoster src={movie.img} />
                        <ItemTitle currentTheme={currentTheme}>
                            {movie.title}
                        </ItemTitle>
                        <ItemYear currentTheme={currentTheme}>
                            {movie.year}
                        </ItemYear>
                    </RecentlySearchedItem>
                )}
            </RecentlySearched>
        </>

    );
}
 
export default MainPage;