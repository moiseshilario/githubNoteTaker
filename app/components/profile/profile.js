import Badge from '../badge/badge'
import { styles } from './profile.css'
import React, { Component } from 'react'
import Separator from '../helpers/separator'

import {
  Text,
  View,
  ScrollView
} from 'react-native'

const topicObject = {
    company: 'Company' ,
    location: 'Location',
    followers: 'Followers',
    following: 'Following',
    email: 'Email',
    bio: 'Bio',
    public_repos: 'Public Repos',
  }

export default class Profile extends Component {

  render(){
    let { userInfo } = this.props
    let jsonAttributes = Object.keys(topicObject)

    let list = Object.keys(userInfo).map((item, index) => {
      if(jsonAttributes.includes(item)){
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> { topicObject[item] }</Text>
              <Text style={styles.rowContent}> { userInfo[item] }</Text>
            </View>
            <Separator/>
          </View>
        )
      }
    })
    
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
}
