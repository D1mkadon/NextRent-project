import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCwUcQOrUejYK6o5MAA_ZMVzTMs-XcTmrk",
  authDomain: "my-auth-project-65ef1.firebaseapp.com",
  projectId: "my-auth-project-65ef1",
  storageBucket: "my-auth-project-65ef1.appspot.com",
  messagingSenderId: "566591586191",
  appId: "1:566591586191:web:4ec1b96845da3cbb7a15fa",
  measurementId: "G-NQGKFPD0XF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
