import React from 'react';

import NavigationBar from 'react-native-navbar';
import { View, Text } from 'react-native';

class Title extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ paddingTop: 3, color: '#000000', fontSize: 16 }}>RocketHealth</Text>
      </View>
    )
  }
};

export default class NavBar extends React.Component {
  render() {
    return (
      <NavigationBar containerStyle={{ backgroundColor: '#EEE' }}
        title={<Title />}
        rightButton={ {title: 'Add'} }
      />
    );
  }
}
