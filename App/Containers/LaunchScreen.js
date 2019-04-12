import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { connect } from 'react-redux'


// Styles
import styles from './Styles/LaunchScreenStyles'
import BottomNavBar from '../Components/BottomNavBar/';

import CategoriesView from './CategoriesView/';

class LaunchScreen extends Component {
  constructor(props, context){
    super(props,context);
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <CategoriesView navigation={this.props.navigation} />
        <BottomNavBar />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    restaurants: state.restaurants.restaurants,
  }
}
export default connect(mapStateToProps, null)(LaunchScreen)
