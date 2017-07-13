import Badge from '../badge/badge'
import React, { Component } from 'react'
import { styles } from './repositories.css'
import Separator from '../helpers/separator'

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

export default class Repositories extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
      </ScrollView>
    )
  }
}