import { Badge, Separator } from '../../components'
import React, { Component } from 'react'
import { styles } from './repositories.css'

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

class Repositories extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
      </ScrollView>
    )
  }
}

export default Repositories