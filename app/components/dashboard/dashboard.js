import Profile from '../profile/profile'
import { styles } from './dashboard.css'
import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  TextArray,
  TouchableHighlight
} from 'react-native'

export default class Dashboard extends Component {
goToProfile = ()=> {
  this.props.navigator.push({
    component: Profile,
    title: 'Profile Page',
    passProps: { userInfo: this.props.userInfo }
  })
}

  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>

        <TouchableHighlight
          style={styles.btnProfile}
          onPress={this.goToProfile}
          >
           <Text style={styles.buttonText}> View Profile </Text> 
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.btnRepos}
          //onPress={this.goToRepos.bind(this)}
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
}