import React, { Component } from 'react'
import { ActivityIndicator, View, Text} from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
}
export default class Loading extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }
}
