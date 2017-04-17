import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import { View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

import { FormLabel, FormInput, Button } from 'react-native-elements';

class AddProject extends React.Component {
  handleHome = () => {
    const { navigator } = this.props;
    navigator.pop();
  };

  handleSubmit = () => {
    const { startAddProject, navigator } = this.props;
    const { title, url } = this;

    const project = {
      title, url
    };

    startAddProject(project).then(() => {
      navigator.pop();
    });
  }

  render() {
    return (
      <View style={{backgroundColor: '#FFF'}}>

        <NavigationBar containerStyle={{ backgroundColor: '#EEE' }}
          title={{ title: 'Add project' }}
          leftButton={ {title: 'Back', handler: this.handleHome } }
        />

        <View style={{ marginBottom: 25 }}>
          <FormLabel>Project name</FormLabel>
          <FormInput onChangeText={(title) => {this.title = title}}/>

          <FormLabel>Project URL</FormLabel>
          <FormInput onChangeText={(url) => {this.url = url}}/>
        </View>

        <Button
          title='Create project'
          onPress={ this.handleSubmit }
          backgroundColor='green'
          butonStyle={{ marginTop: 15 }}
        />
      </View>
    )
  }
}

export default connect((state) => state, actions)(AddProject);
