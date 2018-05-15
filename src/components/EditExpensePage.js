import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions/expensesActions';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => {
  const { id, dispatch } = props;

  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onFormSubmit={expense => {
          props.dispatch(
            expensesActions.startEditExpense(props.expense.id, expense)
          );
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          dispatch(expensesActions.startRemoveExpense({ id }));
          props.history.push('/');
        }}
      >
        x
      </button>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  return {
    id: id,
    expense: state.expenses.find(expense => {
      return expense.id === id;
    })
  };
}

export default connect(mapStateToProps)(EditExpensePage);
