import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Menu from '../Menu/index';
import { theme } from '../../themes/GlobalTheme';
import WatchListItem from './WatchListItem';
import { db } from '../../services/firebase/config';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { ThemeContext } from '../../context/ThemeContext';

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

const WatchList = () => {
    const {currentTheme} = useContext(ThemeContext);
    const [movies, setMovies] = useState([]);
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
                                description: doc.data()[uid].description 
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
        listItem =  movies.map(movie => <WatchListItem
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
            {listItem}
        </Main>
        
    );
}
 
export default WatchList;