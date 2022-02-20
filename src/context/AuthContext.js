import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { auth } from '../services/firebase/config';

export const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

    const [username, setUsername] = useState();
    const [isSignedIn, setIsSignedIn] = useState();

    const signUp = (email, password) => {
        return auth().createUserWithEmailAndPassword(email, password);
    }

    const signIn = (email, password) => {
        return auth().signInWithEmailAndPassword(email, password);
    }

    const signOut = () => {
        return auth().signOut();
    }

    useEffect(() => {
        const cleanup = auth().onAuthStateChanged((user) => {
            if(user) {
                setUsername(user.displayName);
                localStorage.setItem("uid", user.uid);
                if(user.uid) {
                    setIsSignedIn(true);
                }
            }
            else {
                localStorage.removeItem("uid");
                setIsSignedIn(false);
            }
        })

        return cleanup;
    }, []);
    
    const value = {
        username,
        isSignedIn,
        signUp,
        signIn,
        signOut,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}