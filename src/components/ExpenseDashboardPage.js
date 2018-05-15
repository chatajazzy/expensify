import React, { Component } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

export default class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        <ExpensesList />
        <ExpensesListFilters />
      </div>
    );
  }
}
