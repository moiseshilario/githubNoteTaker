import API from '../../../utils/api'
import { styles } from './notes.css'
import React, { Component } from 'react'
import { Badge, Separator } from '../../../components'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import Button from 'react-native-button'

import {
  View,
  Text,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native'

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })



class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(this.props.notes),
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
            .then((data) => {
              this.setState({
                dataSource: ds.cloneWithRows(data)
              })
            })
        }).catch((err) => {
          console.log('Request failed: ', err)
          this.setState({ error })
        })
  }

  renderRow(rowData) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData}</Text>
        </View>
        <Separator />
      </View>
    )
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
          <Text style={[ styles.buttonText, this.state.note != '' && styles.buttonEnabled]}> Submit </Text>
        </Button>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={() => <Badge userInfo={this.props.userInfo} />
          } />
        {this.footer()}
        <KeyboardSpacer />
      </View>
    )
  }
}

export default Notes