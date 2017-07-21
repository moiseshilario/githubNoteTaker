import { styles } from './edit_note.css'
import React, { Component } from 'react'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import Button from 'react-native-button'

import {
  View,
  Text,
  TextInput
} from 'react-native'

class EditNote extends Component {

  handleChange = (e) => {
    this.setState({
      noteText: e.nativeEvent.text
    })
  }

  btnPressed = () => {
    this.props.updateList(this.props.note.key, this.state.noteText)
  }

  noteNotValid = () => this.state.noteText === this.state.originalNote || this.state.noteText === ''

  constructor(props) {
    super(props)
    this.state = {
      noteText: this.props.note.note,
      originalNote: this.props.note.note
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.editNoteText}
            value={this.state.noteText}
            onChange={this.handleChange}
          />
        </View>
        <Button
          containerStyle={[styles.saveBtnDisabled, !this.noteNotValid() && styles.saveBtnEnabled]}
          disabled={this.noteNotValid()}
          onPress={this.btnPressed}
        >
          <Text style={styles.saveBtnText}> Save </Text>
        </Button>
        <KeyboardSpacer />
      </View>
    )
  }
}

export default EditNote