import React from 'react';
import { Link } from 'react-router-dom';

const notFoundPage = () => {
  return (
    <div>
      <p>404 - Page not found</p>
      <Link to="/">Go to homepage</Link>
    </div>
  );
};

export default notFoundPage;
