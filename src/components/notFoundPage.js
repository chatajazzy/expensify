import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>404 - Page not found</p>
      <Link to="/">Go to homepage</Link>
    </div>
  );
};

export default NotFoundPage;
