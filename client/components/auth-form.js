import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth, signUpAuth } from '../store';
import FontAwesome from 'react-fontawesome';

const AuthForm = props => {
  const { name, displayName, handleSubmit, error, match } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          {match.path === '/signup' && (
            <div>
              <label htmlFor="name">Name</label>
              <input name="userName" type="text" />
            </div>
          )}
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </div>
      </form>
      <div>
        <a href="/auth/google">
          <FontAwesome name="google-plus-square" className="social google" />
          <span className="socialText"> {displayName} with Google</span>
        </a>
      </div>
      <div>
        <a href="/auth/facebook">
          <FontAwesome
            name="facebook-square"
            className="social facebook"
          />{' '}
          <span className="socialText"> {displayName} with Facebook</span>
        </a>
      </div>
    </div>
  );
};

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      !evt.target.userName
        ? dispatch(auth(email, password, formName))
        : dispatch(
            signUpAuth(evt.target.userName.value, email, password, formName)
          );
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
