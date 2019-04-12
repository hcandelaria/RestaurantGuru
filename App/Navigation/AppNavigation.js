import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import RestaurantsView from '../Containers/RestaurantsView'
import CategoriesView from '../Containers/CategoriesView/';
import RestaurantDetailsView from '../Containers/RestaurantDetailsView/';
import HeaderNavBar from '../Containers/HeaderNavBar'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  CategoriesView: { screen: CategoriesView },
  RestaurantsView: { screen: RestaurantsView },
  RestaurantDetailsView: { screen: RestaurantDetailsView },
}, {
  initialRouteName: 'LaunchScreen',
  // Default config for all screens
  defaultNavigationOptions: {
    header: ({navigation}) => <HeaderNavBar style={styles} navigation={navigation} />
  }
})

export default createAppContainer(PrimaryNav)
