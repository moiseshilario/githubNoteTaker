import { StyleSheet } from 'react-native'

import { BLUE, DISABLED_GREY } from '../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textInputContainer: {
    flex: 1
  },
  editNoteText: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    fontSize: 18,
    margin: 10,
    padding: 10,
    textAlignVertical: 'top'
  },
  saveBtnDisabled: {
    alignItems: 'center',
    backgroundColor: DISABLED_GREY,
    justifyContent: 'center',
    height: 60,
    marginTop: 5
  },
  saveBtnEnabled: {
    backgroundColor: BLUE
  },
  saveBtnText: {
    color: 'white',
    fontSize: 20
  }
})
