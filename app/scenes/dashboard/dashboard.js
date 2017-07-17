import React from 'react'
import API from '../../utils/api'
import Profile from './profile/profile'
import { styles } from './dashboard.css'
import Repositories from './repositories/repositories'

import {
  View,
  Text,
  Image,
  TextArray,
  TouchableHighlight
} from 'react-native'

const Dashboard = ({ userInfo, navigator }) => {
  goToProfile = () => {
    navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: { userInfo }
    })
  }

  goToRepos = () => {
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

  return (
    <View style={styles.container}>
      <Image source={{ uri: userInfo.avatar_url }} style={styles.image} />

      <TouchableHighlight
        style={styles.btnProfile}
        onPress={this.goToProfile}
      >
        <Text style={styles.buttonText}> View Profile </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btnRepos}
        onPress={this.goToRepos}
      >
        <Text style={styles.buttonText}> View Repos </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.btnNotes}
      //onPress={this.goToNotes.bind(this)}
      >
        <Text style={styles.buttonText}> View Notes </Text>
      </TouchableHighlight>
    </View>
  )
}


export default Dashboard 