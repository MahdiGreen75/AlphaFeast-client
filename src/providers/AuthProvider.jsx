/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../services/firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [validation, setValidation] = useState("");
    const [location, setLocation] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (stableUser) => {
            setUser(stableUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithOther = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        userSignUp,
        signInWithOther,
        logIn,
        logOut,
        validation: [validation, setValidation],
        location: [location, setLocation]

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;