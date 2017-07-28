import React from 'react'

import { Router, Scene } from 'react-native-router-flux'

import { Web } from './components/helpers/web_view'
import Dashboard from './scenes/dashboard/dashboard'
import Home from './scenes/home/home'
import EditNotes from './scenes/dashboard/notes/edit_note'
import Notes from './scenes/dashboard/notes/notes'
import Profile from './scenes/dashboard/profile/profile'
import Repositories from './scenes/dashboard/repositories/repositories'

const githubNotetaker = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="home"
        component={Home}
        initial
        title="Github Notetaker"
      />
      <Scene
        key="dashboard"
        component={Dashboard}
      />
      <Scene
        key="profile"
        component={Profile}
        title="Profile"
      />
      <Scene
        key="repositories"
        component={Repositories}
        title="Repositories"
      />
      <Scene
        key="notes"
        component={Notes}
        title="Notes"
      />
      <Scene
        key="editNote"
        component={EditNotes}
        title="Edit Note"
      />
      <Scene
        key="web"
        component={Web}
      />
    </Scene>
  </Router>
)

export default githubNotetaker
