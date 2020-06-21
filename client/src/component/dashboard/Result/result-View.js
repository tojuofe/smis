import React, { useEffect, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getReport, filterResult } from '../../../action/report';
import ResultItem from './result-Item';
import Spinner from '../../layout/Spinner';

const ResultView = ({
  reports,
  loading,
  filtered,
  getReport,
  filterResult,
}) => {
  useEffect(() => {
    getReport();
  }, [getReport]);

  const text = useRef('');

  const getAllReport =
    filtered !== null
      ? filtered.map((report) => (
          <ResultItem key={report._id} report={report} />
        ))
      : reports.map((report) => (
          <ResultItem key={report._id} report={report} />
        ));
  return (
    <Fragment>
      <div className='staff'>
        <div className='staff-form active' id='newstu'>
          <div className='display card'>
            <div className='flex pb-1'>
              <input
                type='search'
                ref={text}
                placeholder='Search...'
                className='search'
                onChange={(e) => filterResult(e.target.value)}
              />
            </div>

            {reports !== null && !loading ? (
              <table className='table'>
                <thead>
                  <tr>
                    <th>Names</th>
                    <th>Class Admitted</th>
                    <th>Exam Type</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>{getAllReport}</tbody>
              </table>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ResultView.propTypes = {
  reports: PropTypes.array,
  filtered: PropTypes.array,
  loading: PropTypes.bool,
  getReport: PropTypes.func.isRequired,
  filterResult: PropTypes.func.isRequired,
};

const mapStateToProps = ({ report: { reports, loading, filtered } }) => ({
  reports,
  loading,
  filtered,
});

const mapDispatchToProps = (dispatch) => ({
  getReport: () => dispatch(getReport()),
  filterResult: (text) => dispatch(filterResult(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultView);
