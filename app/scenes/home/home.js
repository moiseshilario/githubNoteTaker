import React, { Component } from 'react'

import {
  ActivityIndicator,
  Keyboard,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import { Actions } from 'react-native-router-flux'

import { styles } from './home.css'
import { DARK_BLUE } from '../../styles/colors'
import API from '../../utils/api'


class Home extends Component {
  handleChange = (event) => {
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit = () => {
    Keyboard.dismiss()
    this.setState({
      isLoading: true
    })
    API.getBio(this.state.username)
      .then((res) => {
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        }
        else {
          Actions.dashboard({ userInfo: res, title: res.name })
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer} >

          <Text style={styles.title}> Search for a Github User </Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange}
            returnKeyType="done"
            onSubmitEditing={this.handleSubmit}
            underlineColorAndroid="white"
            selectionColor={DARK_BLUE}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit}
            underlayColor="white"
          >
            <Text style={styles.buttonText}> SEARCH </Text>
          </TouchableHighlight>
          <ActivityIndicator
            animating={this.state.isLoading}
            color="black"
            size="large"
            hidesWhenStop="true"
          />
          {this.state.error && <Text style={styles.errorMsg}> {this.state.error} </Text>}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Home
