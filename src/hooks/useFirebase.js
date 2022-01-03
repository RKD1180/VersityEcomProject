import initializeFirebase from "../Componnent/Login/Firebase/firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // console.log(result.user);
        updateUser(name);
        setAuthError("");
        // ...
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        // console.log(result.user);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const signInWithGoole = (location, navigate) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const loginUser = (email, password, navigate, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  return {
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    updateUser,
    authError,
    signInWithGoole,
  };
};

export default useFirebase;
