import React from 'react'
import Main from './scenes/main/main'

import {
  StyleSheet,
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