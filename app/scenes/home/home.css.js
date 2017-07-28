import { StyleSheet } from 'react-native'
import { BLUE } from '../../styles/colors'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 0,
    padding: 25,
    flexDirection: 'column',
    backgroundColor: BLUE,
    justifyContent: 'flex-start'
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: BLUE,
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  errorMsg: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  }
})
