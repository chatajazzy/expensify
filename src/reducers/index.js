import { combineReducers } from 'redux';
import expenses from './expensesReducer';
import filters from './filtersReducer';

const rootReducer = combineReducers({
  expenses,
  filters
});

export default rootReducer;
