import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// const auth = getAuth();

const Provider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    // google
    const googleLogin = () =>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }
// github
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
     }

    //  email & pasword login

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const register = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout = () =>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log("current user:", currentUser)
            setLoading(false)
        })

        return () =>{
            unSubscribe()
        }
    },[])



    const authInfo = {
        googleLogin,
        githubLogin,
        login,
        register,
        logout,
        user
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Provider