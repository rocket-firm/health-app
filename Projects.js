import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import NavigationBar from 'react-native-navbar';

import { List } from 'react-native-elements';

import Project from './Project';
import * as actions from './actions/actions';

class Projects extends React.Component {
  handleAdd = () => {
    const { navigator } = this.props;

    navigator.push({screen: 'AddProject'});
  };

  handleReload = () => {
    this.props.startAddProjects();
  }

  render() {
    const {projects} = this.props;

    const renderProjects = () => {
        return projects.map((project) => {
          return <Project {...project} key={project.id} />;
        });
    };

    return (
      <View style={{backgroundColor: '#FFF'}}>
        <NavigationBar containerStyle={{ backgroundColor: '#EEE' }}
          title={{ title: 'RocketHealth' }}
          rightButton={ {title: 'Add', handler: this.handleAdd } }
        />
        <List>
          { renderProjects() }
        </List>
      </View>
    );
  }
}

export default connect((state) => state, actions)(Projects);
