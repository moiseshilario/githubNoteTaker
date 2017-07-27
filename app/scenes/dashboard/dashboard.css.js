import { StyleSheet } from 'react-native'

import { BLUE, GREEN, ORANGE } from '../../styles/colors'

const genericButtonStyles = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'center',
  flex: 1
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  btnProfile: {
    ...genericButtonStyles,
    backgroundColor: BLUE
  },
  btnRepos: {
    ...genericButtonStyles,
    backgroundColor: GREEN
  },
  btnNotes: {
    ...genericButtonStyles,
    backgroundColor: ORANGE
  }
})
