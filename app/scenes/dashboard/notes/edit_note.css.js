import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 65
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
    color: '#111',
    fontSize: 18,
    height: 105,
    padding: 10
  },
  saveBtnDisabled: {
    marginTop: 5,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9'
  },
  saveBtnEnabled: {
    backgroundColor: '#48BBEC'
  },
  saveBtnText: {
    color: 'white',
    fontSize: 20
  }
})