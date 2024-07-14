import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const serverRootUrl= "http://localhost:5000"

    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
            
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser);

            if (currentUser) {

                axios.post(serverRootUrl + '/jwt', { email: currentUser.email }, { withCredentials: true })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                axios.post(serverRootUrl + '/removejwt', { email: 'null' }, { withCredentials: true })
                    .catch(err => {
                        console.log(err)
                    })
            }

            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, []);



    const ContextValue = {
        googleSignUp,
        logOut,
        loading,
        user,
        serverRootUrl
    }


    return (
        <AuthContext.Provider value={ContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.any,
}