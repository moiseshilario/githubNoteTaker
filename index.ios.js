import React, { Component } from 'react';
import Main from './app/scenes/main/main';
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  }
});

export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);