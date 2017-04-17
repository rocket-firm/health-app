import * as redux from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const configure = () => {
  return redux.createStore(rootReducer, redux.compose(
    redux.applyMiddleware(thunk)
  ));
};
