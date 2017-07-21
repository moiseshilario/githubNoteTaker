import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 0,
    padding: 25,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
    justifyContent: 'flex-start'
  },
  title: {
    color: '#fff',
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
    color: '#48BBEC',
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