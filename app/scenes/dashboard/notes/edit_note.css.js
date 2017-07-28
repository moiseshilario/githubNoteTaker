import { StyleSheet } from 'react-native'

import { BLUE, DISABLED_GREY } from '../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textInputContainer: {
    flex: 10,
    height: 300
  },
  editNoteText: {
    margin: 10,
    flex: 1,
    borderRadius: 3,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    height: 105,
    padding: 10
  },
  saveBtnDisabled: {
    marginTop: 5,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DISABLED_GREY
  },
  saveBtnEnabled: {
    backgroundColor: BLUE
  },
  saveBtnText: {
    color: 'white',
    fontSize: 20
  }
})
