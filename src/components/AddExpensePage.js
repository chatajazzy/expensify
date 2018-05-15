import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions/expensesActions';

import ExpenseForm from './ExpenseForm';

const AddExpensePage = props => {
  return (
    <div>
      <h1>AddExpensePage</h1>
      <ExpenseForm
        onFormSubmit={expense => {
          props.dispatch(expensesActions.startAddExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
