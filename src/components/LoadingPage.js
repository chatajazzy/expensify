import React from 'react';

const LoadingPage = () => {
  return (
    <div className="loader">
      <img
        classname="loader__image"
        src="/images/loader.gif"
        alt="page loader"
      />
    </div>
  );
};

export default LoadingPage;
