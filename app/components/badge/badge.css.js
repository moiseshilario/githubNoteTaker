import { StyleSheet } from 'react-native'

import { BLUE, GREEN, ORANGE } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  },
  profile: {
    backgroundColor: BLUE
  },
  repos: {
    backgroundColor: GREEN
  },
  notes: {
    backgroundColor: ORANGE
  }
})
