import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRouteStaff = ({
  component: Component,
  auth: { isAuthenticated, token },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && token === null ? (
        <Redirect to='/staff/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRouteStaff.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRouteStaff);
