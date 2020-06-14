import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search.svg';
import ResultsItem from './ResultsItem';
import { theme } from '../../themes/GlobalTheme';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { ThemeContext } from '../../context/ThemeContext';
import { auth } from '../../services/firebase/config';

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
`

const onSubmit = async (e, props, title, movie, setMovie, setResStatus) => {
    setResStatus('loading');
    e.preventDefault();
    const result = await props.getDataFromApi(title);
    if(result.Response === "True") {
        if(result.Ratings.length > 0) {
            setMovie({
                title: result.Title,
                year: result.Year,
                rate: result.Ratings[0].Value,
                duration: result.Runtime,
                genres: result.Genre,
                description: result.Plot,
                error: false,
                img: result.Poster
            });
        } else {
            setMovie({
                title: result.Title,
                year: result.Year,
                rate: "?",
                duration: result.Runtime,
                genres: result.Genre,
                description: result.Plot,
                img: result.Poster,
                error: false
            });
        }
    } else {
        setMovie({...movie, error: true});
    }
    if(!result.Title) {
        setResStatus('empty');
    }
    else setResStatus('done');

    return {};
}

const handleChange = (e, setTitle) => {
    const value = e.target.value;
    setTitle(value);
}

const SearchBar = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [uid, setUid] = useState('');

    useEffect(() => {
        const checkAuth = () => {
            auth().onAuthStateChanged((user) => {
                if(user) {
                    if(user.uid) {
                        setUid(user.uid);
                        setIsSignedIn(true);
                    }
                }
            });
        } 
    
        return () => {
            checkAuth();
        }
    });

    const {currentTheme} = useContext(ThemeContext);

    const [title, setTitle] = useState('');
    const [movie, setMovie]= useState({
        title: '',
        year: '',
        rate: '',
        duration: '',
        genres: '',
        description: '',
        error: false
    });
    const [resStatus, setResStatus] = useState('ready');

    let resultItem = "";

    if(resStatus === "empty") {
        resultItem = <Error currentTheme={currentTheme}> Nothing found :( </Error>

    } else if(resStatus === "loading") {   
        resultItem = <Loader type="TailSpin" color="#00BFFF" height={200} width={100} timeout={3000} />;
    } else {
        resultItem =  <ResultsItem uid={uid} isSignedIn={isSignedIn} movie={movie} />;
    }

    return ( 
        <>
            <SearchBlock>
                <Form onSubmit={(e) => onSubmit(e, props, title, movie, setMovie, setResStatus)}>
                    <SearchInput currentTheme={currentTheme} value={title} onChange={(e) => handleChange(e, setTitle)}/>
                    <SearchButton>
                        <SearchImg src={SearchIcon} />
                    </SearchButton>
                </Form>
            </SearchBlock>
            { resultItem }
        </>

    );
}
 
export default SearchBar;