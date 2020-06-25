import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ResultItem from './ResultItem';

const Result = ({ results }) => {
  if (results !== null && results.length === 0) {
    return <h3 className='text-center mt-2'>No Result Available</h3>;
  }

  return (
    <Fragment>
      {results.map((result) => (
        <ResultItem key={result._id} result={result} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = ({ parent: { results } }) => ({
  results,
});

export default connect(mapStateToProps)(Result);
