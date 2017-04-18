import React from 'react';
import { Provider } from 'react-redux';


import Router from './router/index';

import { configure } from './store/configureStore';
import * as actions from './actions/actions';
const store = configure();
store.dispatch(actions.startAddProjects());

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
