import React from 'react'

import { Actions, Scene } from 'react-native-router-flux'

import Home from './home/home'
import Dashboard from './dashboard/dashboard'
import Notes from './dashboard/notes/notes'
import EditNotes from './dashboard/notes/edit_note'
import Profile from './dashboard/profile/profile'
import Repositories from './dashboard/repositories/repositories'

const Scenes = Actions.create(
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
)

export default Scenes
