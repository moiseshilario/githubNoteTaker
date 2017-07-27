import { StyleSheet } from 'react-native'

import { BLUE } from '../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: BLUE,
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: BLUE,
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
})
