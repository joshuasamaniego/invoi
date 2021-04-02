import React, { useState, useEffect, createContext } from "react";
import firebase from './firebase.js';
import 'firebase/auth';

export const userContext = createContext();

const ContextProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            setLoading(true);
            if(user) {
                setUser(user);
                setLoading(false);
                // User is signed In!
            }
        })
    }, []);

    const initialState = {
        user,
        loading
    }

    return (
        <userContext.Provider value={initialState}>{children}</userContext.Provider>
    );
}

export default ContextProvider;