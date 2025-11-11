import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading,setLoading] = useState(true)
// console.log(user)
const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
    return signOut(auth)
}

const signInEmail  =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

} 
const googleSignIn = ()=>{
    return signInWithPopup(auth,googleProvider)
}




useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser)
setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
},[])







const authData = {
    user,setUser,createUser,logOut,signInEmail,googleSignIn,loading,setLoading
}

    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;