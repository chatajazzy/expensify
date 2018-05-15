import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expensesActions';

const ExpenseListItem = props => {
  const { description, amount, createdAt, id, dispatch } = props;
  return (
    <li>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
      </p>
      <button onClick={() => dispatch(removeExpense({ id }))}>x</button>
    </li>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    expenses: state.expenses
  };
}

export default connect(mapStateToProps)(ExpenseListItem);
