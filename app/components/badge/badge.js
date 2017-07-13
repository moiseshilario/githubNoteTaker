import { styles } from './badge.css'
import React, { Component } from 'react'

import {
  Text,
  View,
  Image
} from 'react-native'

class Badge extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: this.props.userInfo.avatar_url }}/>
        <Text style={styles.name}> { this.props.userInfo.name } </Text>
        <Text style={styles.handle}> { this.props.userInfo.login } </Text>
      </View>
    )
  }
}

export { Badge }