import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Menu from '../Menu/index';
import { theme } from '../../themes/GlobalTheme';
import WatchListItem from './WatchListItem';
import { db } from '../../services/firebase/config';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { ThemeContext } from '../../context/ThemeContext';
import SortBlack from '../../assets/icons/sortblack.svg';
import SortWhite from '../../assets/icons/sortwhite.svg';

const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Error = styled.div`
    width: 100%;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    text-align: center;
    font-size: ${theme.fonts.l};
    margin-top: 100px;
`
const Sort = styled.div`
    position: absolute;
    right: 12px;
    top: 5px;
`
const SortIcon = styled.img`
    height: 35px;
`
const SortOptions = styled.div`
    display: flex;
    width: ${({isSortOpen}) => isSortOpen ? "40%" : "0px" };
    height: ${({isSortOpen}) => isSortOpen ? "180px" : "0px" };
    overflow: hidden;
    flex-direction: column;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${({ currentTheme }) => theme[currentTheme].colors.secondary};
    z-index: 100;
    transition: height .4s ease-in-out;
    border-radius: ${theme.properties.radiusSmall};
    box-shadow: ${({ currentTheme }) => `0px 0px 15px ${theme[currentTheme].colors.primary}`};

    @media (min-width: 1000px) {
        width: ${({isSortOpen}) => isSortOpen ? "20%" : "0px" };
    }
`
const SortOption = styled.div`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    padding: 20px 10px;
    font-size: ${theme.fonts.s};
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: ${({ currentTheme }) => theme[currentTheme].colors.primary};
    }
`
const CloseBox = styled.div`
    display: ${({isSortOpen}) => isSortOpen ? "block" : "none" };
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
`

const sortMovies = (movies, setMovies, type, setSortType) => {
    if(type === 'a-z') {
        setMovies(movies.sort((a, b) => {
            if(a.title < b.title) return -1; 
            if(a.title > b.title) return 1; 
            return 0;
        }));
        setSortType('a-z');
    }
    if(type === 'earliest') {
        setMovies(movies.sort((a, b) => {
            return a.addedAt - b.addedAt;
        }));
        setSortType('earliest');
    }
    if(type === 'latest') {
        setMovies(movies.sort((a, b) => {
            return b.addedAt - a.addedAt;
        }));
        setSortType('latest');
    }
    
}

const WatchList = () => {
    const {currentTheme} = useContext(ThemeContext);
    const [movies, setMovies] = useState([]);
    const [sortType, setSortType] = useState('');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [docs, setDocs] = useState([]);
    const [status, setStatus] = useState('ready');
    const uid = localStorage.getItem("uid");

    useEffect(() => { 
        const res = db.collection('movies').onSnapshot(snapshot => {
            if(snapshot.size) {
                setStatus('loading');
                const results = [];
                const docsId = [];
                snapshot.forEach(doc => {
                        if(doc.data()[uid]) {
                            results.push({ 
                                title: doc.data()[uid].title, 
                                year: doc.data()[uid].year, 
                                rate: doc.data()[uid].rate, 
                                genres: doc.data()[uid].genres, 
                                duration: doc.data()[uid].duration, 
                                description: doc.data()[uid].description,
                                addedAt: doc.data()[uid].addedAt
                            });
                            docsId.push({
                                [doc.data()[uid].title]: doc.id
                            });
                        }
                    }
                );
                
                if(results.length) {
                    setMovies(results);
                    setStatus('done');
                } else {
                    setStatus('empty');
                }
                setDocs(docsId);
            }
        });   
        
        return () => {
            res();
        }

    }, [uid]);

    let listItem = <Loader type="TailSpin" color="#00BFFF" height={400} width={100} timeout={5000} />;

    if(status === "empty") {
        listItem = <Error currentTheme={currentTheme} > Your list is empty :( </Error>
    } else {
        listItem =  movies.map((movie) => <WatchListItem
                        key={movie.title}
                        title={movie.title}
                        year={movie.year}
                        duration={movie.duration}
                        genres={movie.genres}
                        docs={docs}
                    />);
    }

    return ( 
        <Main>
            <Menu
                current="Watch list"
            />
            {movies.length ? 
            <>
                <Sort>
                    <SortIcon onClick={() => setIsSortOpen(!isSortOpen)} src={currentTheme === "light" ? SortBlack : SortWhite } />
                </Sort>
                <SortOptions onClick={() => setIsSortOpen(!isSortOpen)} currentTheme={currentTheme} isSortOpen={isSortOpen}>
                    <SortOption 
                        currentTheme={currentTheme} 
                        onClick={() => sortMovies(movies, setMovies, 'a-z', setSortType)}
                    >
                        A-Z
                    </SortOption>
                    <SortOption 
                        currentTheme={currentTheme} 
                        onClick={() => sortMovies(movies, setMovies, 'earliest', setSortType)}
                    >
                        Earliest added
                    </SortOption>
                    <SortOption 
                        currentTheme={currentTheme} 
                        onClick={() => sortMovies(movies, setMovies, 'latest', setSortType)}
                    >
                        Latest added
                    </SortOption>
                </SortOptions>
                <CloseBox onClick={() => setIsSortOpen(!isSortOpen)} isSortOpen={isSortOpen} />
            </>
            :
            <Loader type="TailSpin" color="#00BFFF" height={400} width={100} timeout={10000} />
            }
            {listItem}
        </Main>
        
    );
}
 
export default WatchList;