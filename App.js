import React from 'react';
import {Provider} from 'react-redux';

import { StyleSheet, Text, View, Navigator } from 'react-native';

import { Constants } from 'expo';

import Projects from './Projects';
import AddProject from './AddProject';

import {configure} from './store/configureStore';
import * as actions from './actions/actions';
const store = configure();
store.dispatch(actions.startAddProjects());

store.subscribe(() => {
  const state = store.getState();
  console.log(state.projects);
})

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderScene.bind(this);
  }

  renderScene(route, nav) {
    // console.log('route', route.id);
    switch (route.screen) {
      case 'Projects':
        return <Projects navigator={nav} />

      case 'AddProject':
        return <AddProject navigator={nav}/>
    }

    return <Projects navigator={nav} />
  }

  render() {

    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ screen: 'Projects' }}
          renderScene={ (route, nav) => { return this.renderScene(route, nav) } }
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
