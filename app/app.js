import React from 'react'

import {
  NavigatorIOS,
  StyleSheet
} from 'react-native'

import Main from './scenes/main/main'

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
