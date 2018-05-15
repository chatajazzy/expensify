import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default function filtersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case appConstants.TEST:
      return 'test';
    default:
      return state;
  }
}
