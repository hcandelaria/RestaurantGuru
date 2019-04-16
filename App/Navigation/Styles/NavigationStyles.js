import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'
import { Platform } from 'react-native'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'row',
    height: 80,
    marginTop: Platform.OS == 'ios' ? 20 : 0 // only for IOS to give StatusBar Space
  }
})
