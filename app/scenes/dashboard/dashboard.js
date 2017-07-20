import React from 'react'
import API from '../../utils/api'
import Profile from './profile/profile'
import Notes from './notes/notes'
import { styles } from './dashboard.css'
import Repositories from './repositories/repositories'

import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'

const Dashboard = ({ userInfo, navigator }) => {
  const goToProfile = () => {
    navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: { userInfo }
    })
  }

  const goToRepos = () => {
    API.getRepos(userInfo.login)
      .then((repos) => {
        navigator.push({
          component: Repositories,
          title: 'Repos',
          passProps: {
            userInfo,
            repos,
            navigator
          }
        })
      })
  }

  const goToNotes = () => {
    navigator.push({
      component: Notes,
      title: 'Notes',
      passProps: { userInfo }
    })
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: userInfo.avatar_url }} style={styles.image} />

      <TouchableHighlight
        style={styles.btnProfile}
        onPress={goToProfile}
      >
        <Text style={styles.buttonText}> View Profile </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btnRepos}
        onPress={goToRepos}
      >
        <Text style={styles.buttonText}> View Repos </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btnNotes}
        onPress={goToNotes.bind(this)}
      >
        <Text style={styles.buttonText}> View Notes </Text>
      </TouchableHighlight>
    </View>
  )
}


export default Dashboard