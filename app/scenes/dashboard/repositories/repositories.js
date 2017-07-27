import { Badge, Separator, Web } from '../../../components'
import React from 'react'
import { styles } from './repositories.css'

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

const Repositories = ({ userInfo, repos, navigator }) => {
  const openPage = (url, name) => {
    navigator.push({
      component: Web,
      title: name,
      passProps: { url }
    })
  }

  const list = repos.map((item, index) => {
    const { html_url, name, stargazers_count, description } = item

    return (
      <View key={index}>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={openPage.bind(this, html_url, name)}
            underlayColor="transparent"
          >
            <Text style={styles.name}> {name} </Text>
          </TouchableHighlight>
          <Text style={styles.stars}> Stars: {stargazers_count}</Text>
          {
            description && <Text style={styles.description}> {description} </Text>
          }
        </View>
        <Separator />
      </View>
    )
  })
  return (
    <ScrollView style={styles.container}>
      <Badge userInfo={userInfo} screen={'repos'} />
      {list}
    </ScrollView>
  )
}

export default Repositories
