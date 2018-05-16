import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions/expensesActions';

import ExpenseForm from './ExpenseForm';

const AddExpensePage = props => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">AddExpensePage</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onFormSubmit={expense => {
            props.dispatch(expensesActions.startAddExpense(expense));
            props.history.push('/');
          }}
        />
      </div>
    </div>
  );
};

export default connect()(AddExpensePage);
