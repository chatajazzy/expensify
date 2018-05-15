import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default function expensesReducer(state = initialState.expenses, action) {
  switch (action.type) {
    case appConstants.TEST:
      return 'test';
    default:
      return state;
  }
}
