import React from 'react';
import { connect } from 'react-redux';

const ExpensesList = props => {
  return (
    <div>
      <h1>ExpensesList</h1>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpensesList);
