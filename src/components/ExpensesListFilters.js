import React from 'react';
import { connect } from 'react-redux';
import * as filtersActions from '../actions/filtersActions';
const ExpensesListFilters = props => {
  const { dispatch } = props;
  return (
    <div>
      <input
        type="text"
        defaultValue={props.filters.text}
        onChange={e => dispatch(filtersActions.setTextFilter(e.target.value))}
      />
      <select
        onChange={e =>
          e.target.value === 'date'
            ? dispatch(filtersActions.sortByDate())
            : dispatch(filtersActions.sortByAmount())
        }
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpensesListFilters);
