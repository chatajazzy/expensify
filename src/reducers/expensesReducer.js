import appConstants from '../constants/appConstants';
import { initialState } from './initialState';

export default (state = initialState.expenses, action) => {
  switch (action.type) {
    case appConstants.ADD_EXPENSE:
      return [...state, action.expense];
    case appConstants.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case appConstants.EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case appConstants.SET_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};
