import { StyleSheet } from 'react-native'

import { BLUE, LIGHT_GREY } from '../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonText: {
    fontSize: 18,
    color: LIGHT_GREY
  },
  button: {
    height: 60,
    backgroundColor: BLUE,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonEnabled: {
    color: 'white'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: 'black',
    flex: 10
  },
  rowContainer: {
    padding: 20
  },
  footerContainer: {
    backgroundColor: LIGHT_GREY,
    alignItems: 'center',
    flexDirection: 'row'
  },
  loading: {
    marginTop: 50
  }
})


