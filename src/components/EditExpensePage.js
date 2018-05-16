import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions/expensesActions';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => {
  const { id, dispatch } = props;

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit ExpensePage</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onFormSubmit={expense => {
            props.dispatch(
              expensesActions.startEditExpense(props.expense.id, expense)
            );
            props.history.push('/');
          }}
        />
        <div>
          <button
            className="button button--secondary"
            onClick={() => {
              dispatch(expensesActions.startRemoveExpense({ id }));
              props.history.push('/');
            }}
          >
            Remove
          </button>
        </div>
      </div>
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
