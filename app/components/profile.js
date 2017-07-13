import React, { Component } from 'react'

import Badge from './badge'

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native'



var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

const topicObject = {
    company: 'Company' ,
    location: 'Location',
    followers: 'Followers',
    following: 'Following',
    email: 'Email',
    bio: 'Bio',
    public_repos: 'Public Repos',
  }

export default class Profile extends Component {
  

  render(){
    let { userInfo } = this.props
    console.log(userInfo)

    let jsonAttributes = Object.keys(topicObject)
    let list = Object.keys(userInfo).map((item, index) => {
      if(jsonAttributes.contains(item)){
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> { topicObject[item] }</Text>
              <Text style={styles.rowContent}> { userInfo.item }</Text>
            </View>
          </View>
        )
      }
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
}
