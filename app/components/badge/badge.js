import React from 'react'

import {
  Image,
  Text,
  View
} from 'react-native'

import { styles } from './badge.css'

export const Badge = ({ userInfo, screen }) => {
  const { avatar_url, name, login } = userInfo

  return (
    <View style={[styles.container, styles[screen]]}>
      <Image style={styles.image} source={{ uri: avatar_url }} />
      <Text style={styles.name}> {name} </Text>
      <Text style={styles.handle}> {login} </Text>
    </View>
  )
}

