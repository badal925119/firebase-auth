import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { auth } from '../firebaseinit';


export const AuthContext = createContext(null)
const googleProvider = new  GoogleAuthProvider();


const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null)
    const [loding, setLoding]=useState(true)
    const createUser =(email,password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singInUser =(email,password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser =()=>{
        setLoding(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('curren user', currentUser)
            setUser(currentUser);
            setLoding(false);

        })

        return ()=>{
            unSubscribe();
        }
    },[])



    const authInfo ={
        name:'Deena Moni',
        user,
        createUser,
        singInUser,
        signOutUser,
        loding,
        signWithGoogle
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default AuthProviders;