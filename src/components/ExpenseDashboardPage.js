import React, { Component } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';

export default class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        <ExpensesSummary />
        <ExpensesListFilters />
        <ExpensesList />
      </div>
    );
  }
}
