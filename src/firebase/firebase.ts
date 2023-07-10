import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALxTJaN5MG_bPYwCDTAnpEJhJDAd-KWJk",
  authDomain: "autopayauthentication.firebaseapp.com",
  projectId: "autopayauthentication",
  storageBucket: "autopayauthentication.appspot.com",
  messagingSenderId: "810016810764",
  appId: "1:810016810764:web:6e29969ada9298960ecb29",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
