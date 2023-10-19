import React, { createContext } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// const auth = getAuth();

const Provider = ({children}) => {

    // google
    const googleLogin = () =>{
       return signInWithPopup(auth,googleProvider)
    }
// github
    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider)
     }

    const authInfo = {
        googleLogin,
        githubLogin
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Provider