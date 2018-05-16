import appConstants from '../constants/appConstants';
import { firebase, googleAuthProvider } from '../firebase';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = uid => {
  return {
    type: appConstants.LOGIN,
    uid
  };
};

export const logout = () => {
  return {
    type: appConstants.LOGOUT
  };
};
