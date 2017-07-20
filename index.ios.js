import React from 'react'
import Main from './app/scenes/main/main'
import {
  StyleSheet,
  AppRegistry,
  NavigatorIOS
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
})

const githubNotetaker = () => (
  <NavigatorIOS
    style={styles.container}
    initialRoute={{
      title: 'Github Notetaker',
      component: Main
    }}
  />
)

export default githubNotetaker

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker)