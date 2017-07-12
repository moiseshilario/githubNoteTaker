import React, { Component } from 'react'

import {
  Image,
  Text,
  TextArray,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native'

const genericButtonStyles = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'center',
  flex: 1
}

let styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  btnProfile: {
    ...genericButtonStyles,
    backgroundColor: '#48BBEC'
  },
  btnRepos: {
    ...genericButtonStyles,
    backgroundColor: '#E77AAE'
  },
  btnNotes: {
    ...genericButtonStyles,
    backgroundColor: '#758BF4'
  }

})

export default class Dashboard extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>

        <TouchableHighlight
          style={styles.btnProfile}
          //onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4F5'>
           <Text style={styles.buttonText}> View Profile </Text> 
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.btnRepos}
          //onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
           <Text style={styles.buttonText}> View Profile </Text> 
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.btnNotes}
          //onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4F5'>
           <Text style={styles.buttonText}> View Profile </Text> 
        </TouchableHighlight>
      </View>
    )
  }
}