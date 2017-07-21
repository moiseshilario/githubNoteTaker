import API from '../../utils/api'
import { styles } from './main.css'
import React, { Component } from 'react'
import Dashboard from '../dashboard/dashboard'

import {
  View,
  Text,
  Keyboard,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native'

class Main extends Component {
  handleChange = (event) => {
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit = () => {
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
          this.props.navigator.push({
            title: res.name || 'Select an Option',
            component: Dashboard,
            passProps: { userInfo: res }
          })
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
    let showErr = (
      this.state.error ? <Text style={styles.errorMsg}> {this.state.error} </Text> : <View />
    )

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer} >

          <Text style={styles.title}> Search for a Github User </Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange}
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
            color="#111"
            size="large"
            hidesWhenStop="true"
          />
          {showErr}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Main