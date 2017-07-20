import API from '../../../utils/api'
import { styles } from './notes.css'
import React, { Component } from 'react'
import { Badge, Separator } from '../../../components'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import Button from 'react-native-button'
import Swipeout from 'react-native-swipeout'

import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'

const notesJSONToArray = (notes) => {
  const entries = Object.entries(notes)
  return entries.map(([key, note]) => ({ key, note }))
}


class Notes extends Component {

  handleChange(e) {
    this.setState({
      note: e.nativeEvent.text
    })
  }

  handleSubmit() {
    let note = this.state.note

    this.setState({
      note: ''
    })

    API.addNote(this.props.userInfo.login, note)
      .then((data) => {
        API.getNotes(this.props.userInfo.login)
          .then((notes) => {
            this.setState({
              allNotes: notesJSONToArray(notes)
            })
          })
      }).catch((error) => {
        console.log('Request failed: ', error)
        this.setState({ error })
      })
  }

  footer() {
    return (
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange.bind(this)}
          placeholder="New Note"
        />
        <Button
          containerStyle={styles.button}
          disabled={this.state.note === ''}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={[styles.buttonText, this.state.note !== '' && styles.buttonEnabled]}> Submit </Text>
        </Button>
      </View>
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      note: '',
      error: ''
    }
  }

  componentWillMount() {
    API.getNotes(this.props.userInfo.login)
      .then((notesJSON) => {
        this.setState({
          allNotes: notesJSONToArray(notesJSON),
          loading: false
        })
      })
  }

  renderItem = ({ item }) => {
    let rightBtn = [{
      text: 'Delete',
      backgroundColor: '#f44336',
      underlayColor: '#d32f2f',
      onPress: () => {
        API.deleteNote(this.props.userInfo.login, item.key)
          .then(() => {
            API.getNotes(this.props.userInfo.login)
              .then((notes) => {
                this.setState({
                  allNotes: notesJSONToArray(notes)
                })
              })
          })
      }
    }]

    const _onPressButton = () => {
      console.log(' clickou')
    }

    return (
      <Swipeout
        right={rightBtn}
        autoClose
        backgroundColor="white"
      >

        <TouchableHighlight style={styles.rowContainer}
          onPress={_onPressButton}
          underlayColor="#eeeeee"
        >
          <Text> {item.note}</Text>
        </TouchableHighlight>


        <Separator />
      </Swipeout>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.allNotes}
          renderItem={this.renderItem}
          ListHeaderComponent={<Badge userInfo={this.props.userInfo} />}
          ListFooterComponent={
            <ActivityIndicator
              style={styles.loading}
              animating={this.state.loading}
              size="large"
            />
          }
        />
        {this.footer()}
        <KeyboardSpacer />
      </View>
    )
  }
}


export default Notes