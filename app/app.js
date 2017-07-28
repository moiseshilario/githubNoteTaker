import React from 'react'

import { StyleSheet } from 'react-native'

import { Router, Scene } from 'react-native-router-flux'

import Home from './scenes/home/home'
import Dashboard from './scenes/dashboard/dashboard'
import Notes from './scenes/dashboard/notes/notes'
import EditNotes from './scenes/dashboard/notes/edit_note'
import Profile from './scenes/dashboard/profile/profile'
import Repositories from './scenes/dashboard/repositories/repositories'

const githubNotetaker = () => (
  <Router>
    <Scene
      key="root"
    >
      <Scene
        key="home"
        component={Home}
        initial
        title="Github Notetaker"
        style={styles.container}
      />
      <Scene
        key="dashboard"
        component={Dashboard}
      />
      <Scene
        key="profile"
        component={Profile}
      />
      <Scene
        key="repositories"
        component={Repositories}
      />
      <Scene
        key="notes"
        component={Notes}
      />
      <Scene
        key="editNotes"
        component={EditNotes}
      />

    </Scene>
  </Router>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
})

export default githubNotetaker
