import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../expensesHelper';

const ExpensesList = props => {
  const espenses = props.expenses.map(expense => {
    return <ExpenseListItem key={expense.id} {...expense} />;
  });

  return (
    <div>
      <h1>ExpensesList</h1>
      <ul>{espenses}</ul>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpensesList);
