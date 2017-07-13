import { styles } from './badge.css'
import React, { Component } from 'react'

import {
  Text,
  View,
  Image
} from 'react-native'

const Badge = ({ userInfo }) => {
  const { avatar_url, name, login } = userInfo

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: avatar_url }}/>
      <Text style={styles.name}> { name } </Text>
      <Text style={styles.handle}> { login } </Text>
    </View>
  )
}

export { Badge }