import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default (state = initialState.filters, action) => {
  switch (action.type) {
    case appConstants.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case appConstants.SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };
    case appConstants.SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      };
    case appConstants.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case appConstants.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
