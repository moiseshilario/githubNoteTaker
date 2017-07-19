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
  TouchableHighlight
} from 'react-native'


class Notes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      note: '',
      error: ''
    }
  }

  handleChange(e) {
    this.setState({
      note: e.nativeEvent.text
    })
  }

  handleSubmit() {
    let note = this.state.note;

    this.setState({
      note: ''
    })

    API.addNote(this.props.userInfo.login, note)
      .then((data) => {
        API.getNotes(this.props.userInfo.login)
      }).catch((err) => {
        console.log('Request failed: ', err)
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
          placeholder="New Note" />
        <Button
          containerStyle={styles.button}
          disabled={this.state.note === ''}
          onPress={this.handleSubmit.bind(this)}>
          <Text style={[styles.buttonText, this.state.note != '' && styles.buttonEnabled]}> Submit </Text>
        </Button>
      </View>
    )
  }

  renderItem = ({ item }) => {
    const rightBtn = [{
      text: 'Delete',
      backgroundColor: 'red'
      //onPress: () => { this.deleteNote() }
    }];

    const leftBtn = [{
      text: 'Edit',
      backgroundColor: 'orange'
      //onPress: () => { this.editNote() }
    }];


    return (
      <Swipeout
        style={styles.swipeItem}
        right={rightBtn}
        left={leftBtn}>
        <View style={styles.rowContainer}>
          <Text> {item.note}</Text>
        </View>
        <Separator />
      </Swipeout>
    )
  }

  render() {
    console.log(this.props.notes)
    return (
      <View style={styles.container}>

        <FlatList
          data={this.props.notes}
          renderItem={this.renderItem}
          ListHeaderComponent={<Badge userInfo={this.props.userInfo} />}
        />
        {this.footer()}
        <KeyboardSpacer />
      </View>
    )
  }
}

export default Notes