import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {
  Main,
  Login,
  Signup,
  UserHome,
  Spicy,
  Sweet,
  Salty,
  Sour,
  Umami
} from './components';
import {
  me,
  fetchSpicyMatches,
  fetchSweetMatches,
  fetchSaltyMatches,
  fetchSourMatches,
  fetchUmamiMatches
} from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {isLoggedIn && (
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route path="/home" component={UserHome} />
                <Route path="/spicy" component={Spicy} />
                <Route path="/sweet" component={Sweet} />
                <Route path="/salty" component={Salty} />
                <Route path="/sour" component={Sour} />
                <Route path="/umami" component={Umami} />
              </Switch>
            )}
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
      dispatch(fetchSpicyMatches());
      dispatch(fetchSweetMatches());
      dispatch(fetchSaltyMatches());
      dispatch(fetchSourMatches());
      dispatch(fetchUmamiMatches());
    }
  };
};

export default connect(mapState, mapDispatch)(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
