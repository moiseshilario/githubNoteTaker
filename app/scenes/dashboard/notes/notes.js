import React, { Component } from 'react'

import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import Button from 'react-native-button'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { Actions } from 'react-native-router-flux'
import Swipeout from 'react-native-swipeout'

import { styles } from './notes.css'
import { Badge, Separator } from '../../../components'
import { RED, DARK_RED, UNDERLAY_GREY } from '../../../styles/colors'
import API from '../../../utils/api'

const notesJSONToArray = (notes) => {
  notes = notes || {}
  const entries = Object.entries(notes)
  return entries.map(([key, note]) => ({ key, note }))
}

class Notes extends Component {

  handleChange = (e) => {
    this.setState({
      note: e.nativeEvent.text
    })
  }

  handleSubmit = () => {
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
          onChange={this.handleChange}
          placeholder="New Note"
        />
        <Button
          containerStyle={styles.button}
          disabled={this.state.note === ''}
          onPress={this.handleSubmit}
        >
          <Text style={[styles.buttonText, this.state.note !== '' && styles.buttonEnabled]}> Submit </Text>
        </Button>
      </View>
    )
  }

  refreshNotes() {
    API.getNotes(this.props.userInfo.login)
      .then((notesJSON) => {
        this.setState({
          allNotes: notesJSONToArray(notesJSON),
          loading: false
        })
      })
  }

  updateList = (key, text) => {
    API.updateNote(this.props.userInfo.login, key, text)
      .then(() => this.refreshNotes())
      .then(() => Actions.pop())
  }

  constructor(props) {
    super(props)
    this.state = {
      note: '',
      error: ''
    }
  }

  componentWillMount() {
    this.refreshNotes()
  }

  renderItem = ({ item }) => {
    let rightBtn = [{
      text: 'Delete',
      backgroundColor: RED,
      underlayColor: DARK_RED,
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

    const onNotePressed = (note) => {
      Actions.editNote({
        note,
        userInfo: this.props.userInfo,
        updateList: this.updateList
      })
    }

    return (
      <Swipeout
        right={rightBtn}
        autoClose
        backgroundColor="white"
      >

        <TouchableHighlight style={styles.rowContainer}
          onPress={() => onNotePressed(item)}
          underlayColor={UNDERLAY_GREY}
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
          ListHeaderComponent={<Badge userInfo={this.props.userInfo} screen={'notes'} />}
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
