import { StyleSheet } from 'react-native'

import { BLUE } from '../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: BLUE,
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
})
