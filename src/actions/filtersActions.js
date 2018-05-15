import appConstants from '../constants/appConstants';

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: appConstants.SET_TEXT_FILTER,
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: appConstants.SORT_BY_DATE
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: appConstants.SORT_BY_AMOUNT
});

// SET_START_DATE
export const setStartDate = startDate => ({
  type: appConstants.SET_START_DATE,
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: appConstants.SET_END_DATE,
  endDate
});
