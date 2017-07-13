import React, { Component } from 'react'
import Badge from './badge'
import Separator from './helpers/separator'

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
      </ScrollView>
    )
  }
}