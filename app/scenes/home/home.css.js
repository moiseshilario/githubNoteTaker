import { Platform, StyleSheet } from 'react-native'
import { BLUE } from '../../styles/colors'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: BLUE,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 25
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center'
  },
  searchInput: {
    borderColor: Platform.OS === 'ios' ? 'white' : 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    color: 'white',
    fontSize: 23,
    height: 50,
    marginRight: 5,
    padding: 4
  },
  buttonText: {
    alignSelf: 'center',
    color: BLUE,
    fontSize: 18
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  errorMsg: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20
  }
})
