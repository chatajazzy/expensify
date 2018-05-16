import appConstants from '../constants/appConstants';
import { initialState } from './initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case appConstants.LOGIN:
      return {
        uid: action.uid
      };
    case appConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
