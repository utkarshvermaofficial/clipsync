import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./config";

// Sign up
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log in
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Log out
export const logout = () => {
  return signOut(auth);
};
