import React, { Fragment } from 'react';
import img from './img/IMG.png';

const NotFound = () => {
  return (
    <Fragment>
      <div className='not_found-container'>
        <div className='not-found'>
          <img src={img} className='img-round x2' alt='img' />
          <h1>
            404 -- Page not found
            <span>you are trying to access a page that does not exist</span>
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
