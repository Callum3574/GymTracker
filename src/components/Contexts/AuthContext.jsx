import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthContent = React.createContext();

export function useAuth() {
  return useContext(AuthContent);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (e) {
      console.error(e);
    }
  }

  function login(email, password) {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
    }
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    try {
      return sendPasswordResetEmail(auth, email);
    } catch (e) {
      console.error(e);
    }
  }

  function updateEmail(email) {
    try {
      return updateProfile(auth.currentUser, email);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
  };
  return (
    <AuthContent.Provider value={value}>
      {!loading && children}
    </AuthContent.Provider>
  );
}
