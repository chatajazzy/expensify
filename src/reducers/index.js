import { combineReducers } from 'redux';
import expenses from './expensesReducer';
import filters from './filtersReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  expenses,
  filters,
  auth
});

export default rootReducer;
