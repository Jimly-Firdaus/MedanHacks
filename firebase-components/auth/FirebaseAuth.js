import initFirebase from "../../firebase/initFirebase";
import { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import { setUserCookie } from "../../firebase/setUserCookies";
import { mapUserData } from "../../firebase/mapUserData";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

// Initialize Firebase
initFirebase();

const auth = getAuth();

// Firebase Auth Config
const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = mapUserData(user);
      setUserCookie(userData);
    },
  },
};

// Authentication
const FirebaseAuth = () => {
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
        setRenderAuth(true)
    }
}, []);
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={auth} />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
