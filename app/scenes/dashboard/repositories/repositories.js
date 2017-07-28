import React from 'react'

import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import { styles } from './repositories.css'
import { Badge, Separator } from '../../../components'
import { Actions } from 'react-native-router-flux'

const Repositories = ({ userInfo, repos, navigator }) => {
  const openPage = (url, name) => {
    Actions.web({ url, title: name })
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
