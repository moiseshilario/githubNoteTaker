import { StyleSheet } from 'react-native'

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
    backgroundColor: '#48BBEC'
  },
  btnRepos: {
    ...genericButtonStyles,
    backgroundColor: '#E77AAE'
  },
  btnNotes: {
    ...genericButtonStyles,
    backgroundColor: '#FF8C00'
  }
})