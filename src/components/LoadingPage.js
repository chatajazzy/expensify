import React from 'react';
import loaderGif from '../images/loader.gif';

const LoadingPage = () => {
  return (
    <div className="loader">
      <img className="loader__image" src={loaderGif} alt="page loader" />
    </div>
  );
};

export default LoadingPage;
