import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectExpenses from '../expensesHelper';

const ExpensesList = props => {
  const espenses =
    props.expenses.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No expenses</span>
      </div>
    ) : (
      props.expenses.map(expense => {
        return <ExpensesListItem key={expense.id} {...expense} />;
      })
    );

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">{espenses}</div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpensesList);
