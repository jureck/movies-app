import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const initialState = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    const [currentTheme, setCurrentTheme] = useState(initialState); 

    return ( 
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;