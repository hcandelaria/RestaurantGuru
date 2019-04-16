import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import RestaurantsView from '../Containers/RestaurantsView'
import CategoriesView from '../Containers/CategoriesView/'
import RestaurantDetailsView from '../Containers/RestaurantDetailsView/'
import HeaderNavBar from '../Containers/HeaderNavBar'
import styles from './Styles/NavigationStyles'
import StorybookUI from '../../storybook/index.js'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  CategoriesView: { screen: CategoriesView },
  RestaurantsView: { screen: RestaurantsView },
  RestaurantDetailsView: { screen: RestaurantDetailsView },
  StorybookUI: { screen: StorybookUI }
}, {
  /*
   * To Run App
   * Uncomment the following lines
   */
  initialRouteName: 'LaunchScreen',
  defaultNavigationOptions: {
    header: ({navigation}) => <HeaderNavBar style={styles} navigation={navigation} />
  }
  /*
   * For Testing using storybook
   * Uncomment the folloing lines
   */
  // initialRouteName: 'StorybookUI',
  // headerMode: 'none',
  // navigationOptions: {
  //   headerVisible: false,
  // }
})

export default createAppContainer(PrimaryNav)
