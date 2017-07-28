import React, { Component } from 'react'

import {
  Platform,
  View,
  Text,
  TextInput
} from 'react-native'

import Button from 'react-native-button'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import { styles } from './edit_note.css'
import { DARK_BLUE } from '../../../styles/colors'

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
            style={styles.editNoteText}
            multiline
            onChange={this.handleChange}
            selectionColor={DARK_BLUE}
            value={this.state.noteText}
          />
        </View>
        <Button
          containerStyle={[styles.saveBtnDisabled, !this.noteNotValid() && styles.saveBtnEnabled]}
          disabled={this.noteNotValid()}
          onPress={this.btnPressed}
        >
          <Text style={styles.saveBtnText}> Save </Text>
        </Button>
         { Platform.OS === 'ios' && <KeyboardSpacer /> }
      </View>
    )
  }
}

export default EditNote
