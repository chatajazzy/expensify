import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = props => {
  const { description, amount, createdAt, id } = props;
  return (
    <li>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {createdAt}
      </p>
    </li>
  );
};

export default ExpenseListItem;
