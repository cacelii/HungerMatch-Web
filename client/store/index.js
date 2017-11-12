import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import spicy from './spicy';
import sweet from './sweet';
import salty from './salty';
import sour from './sour';
import umami from './umami';

const reducer = combineReducers({ user, spicy, sweet, salty, sour, umami });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './spicy';
export * from './sweet';
export * from './salty';
export * from './sour';
export * from './umami';
