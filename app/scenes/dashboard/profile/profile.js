import React from 'react'

import {
  ScrollView,
  Text,
  View
} from 'react-native'

import { styles } from './profile.css'
import { Badge, Separator } from '../../../components'

const topicObject = Object.entries({
  company: 'Company',
  location: 'Location',
  followers: 'Followers',
  following: 'Following',
  email: 'Email',
  bio: 'Bio',
  public_repos: 'Public Repos'
})

const Profile = ({ userInfo }) => (

  <ScrollView style={styles.container}>
    <Badge userInfo={userInfo} screen={'profile'} />
    {
      topicObject.map(([key, title]) => {
        const value = userInfo[key]

        return (
          <View key={key}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {title} </Text>
              <Text style={styles.rowContent}> {value} </Text>
            </View>
            <Separator />
          </View>
        )
      })
    }
  </ScrollView>
)


export default Profile
