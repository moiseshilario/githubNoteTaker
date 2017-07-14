import { Badge, Separator } from '../../../components'
import React, { Component } from 'react'
import { styles } from './repositories.css'

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

const Repositories = ({ userInfo, repos }) => {
  openPage = (url) => {
    console.log('the url: ', url)
  }

  const list = repos.map((item, index) => {
    const desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View/>

    return (
      <View key={index}>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this.openPage(repos[index.html_url])}
            underlayColor='transparent'>
            <Text style={styles.name}> {repos[index].name} </Text>
          </TouchableHighlight>
          <Text style={styles.stars}> Stars: {repos[index].stargazers_count}</Text>
          {desc}
        </View>
        <Separator />
      </View>
    )
  })

  return (
    <ScrollView style={styles.container}>
      <Badge userInfo={userInfo} />
      {list}
    </ScrollView>
  )
}



export default Repositories