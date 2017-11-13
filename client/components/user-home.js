import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const UserHome = props => {
  const { name, email } = props;

  return (
    <div>
      <h1>Welcome, {name ? name : email}</h1>
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

const mapState = state => {
  return {
    name: state.user.name,
    email: state.user.email
  };
};

export default connect(mapState)(UserHome);

UserHome.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string
};
