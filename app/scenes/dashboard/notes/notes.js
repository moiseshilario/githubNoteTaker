import API from '../../../utils/api'
import { styles } from './notes.css'
import React, { Component } from 'react'
import { Badge, Separator } from '../../../components'
import KeyboardSpacer from 'react-native-keyboard-spacer'

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

  handleSubmit(){
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
        this.setState({error})
      })
  }

  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData}</Text>
        </View>
        <Separator/>
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
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
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
        renderHeader={() => <Badge userInfo={ this.props.userInfo }/> 
      } /> 
      {this.footer()}
      <KeyboardSpacer/>
    </View>
    )
    
  }
}

export default Notes