import React, { useContext, useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';

// create the context
const AuthContext = createContext();

// custom context-hook to use AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// the context provider as wrapper
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  // signup an user, which will return a promise
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // login an user, which will return a promise
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //  logout user, which will return a promise
  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      console.log('cleaned');
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
