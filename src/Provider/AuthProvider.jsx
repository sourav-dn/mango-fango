import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';
export const Authcontext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
    };
  
    const authInfo = {user,loading,createUser,userLogin,logOut,updateUserProfile,setUser};
    return (
      <Authcontext.Provider value={authInfo}>
        {children}
      </Authcontext.Provider>
    );
  };
  


export default AuthProvider;