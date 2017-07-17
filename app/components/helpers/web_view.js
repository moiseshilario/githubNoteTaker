import React from 'react'

import {
  View,
  WebView
} from 'react-native'

const Web = ({ url }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F6F6EF',
      flexDirection: 'column'
    }}
    >
      <WebView source={{ uri: url }} />
    </View>
  )
}

export { Web }