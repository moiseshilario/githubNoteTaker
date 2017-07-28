import React from 'react'

import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import { Actions } from 'react-native-router-flux'

import { styles } from './dashboard.css'
import API from '../../utils/api'

const Dashboard = ({ userInfo, navigator }) => {
  const goToProfile = () => {
    Actions.profile({ userInfo })
  }

  const goToRepos = () => {
    API.getRepos(userInfo.login)
      .then((repos) => {
        Actions.repositories({ userInfo, repos })
      })
  }

  const goToNotes = () => {
    Actions.notes({ userInfo })
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
        onPress={goToNotes}
      >
        <Text style={styles.buttonText}> View Notes </Text>
      </TouchableHighlight>
    </View>
  )
}


export default Dashboard
