/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Main from './app/components/main';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
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
