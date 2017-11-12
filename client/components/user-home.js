import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email } = props;

  return (
    <div>
      <h1>Welcome, {email}</h1>
      <h1>What are you craving?</h1>
      <div>
        <Link to="/spicy">
          <button>Spicy</button>
        </Link>
        <Link to="/sweet">
          <button>Sweet</button>
        </Link>
        <Link to="/salty">
          <button>Salty</button>
        </Link>
        <Link to="/sour">
          <button>Sour</button>
        </Link>
        <Link to="/umami">
          <button>Umami</button>
        </Link>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
