//flow
import React, { Component } from 'react'
import { Container, Text } from 'native-base'
import { connect } from 'react-redux'

import { ScrollView } from 'react-native-gesture-handler'
import Loading from '../../Components/Loading'
import RestaurantsList from '../../Components/RestaurantsList'
import SearchBar from '../SearchBar'

class RestaurantsView extends Component {
  /**
   * Class constructor.
   */
  constructor (props, context) {
    super(props, context)
    this.state = {
      location:{
        latitude: 0,
        longitude: 0
      }
    }
    this.handleOnPress = this.handleOnPress.bind(this)
    this.getLocation = this.getLocation.bind(this)
  }

  handleOnPress (restaurant) {
    const payload = {
      restaurant: restaurant,
      location: this.state.location
    }
    this.props.navigation.navigate('RestaurantDetailsView', payload)
  }

  getLocation = ()=> navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  )

  componentDidMount () {
    this.getLocation()
  }

  render () {
    return (
      <Container>
        <Text style={{textAlign: 'center'}}>Choose a restaurant</Text>
        <SearchBar />
        {
          this.props.fetchingRestaurants
            ? <Loading />
          : this.props.restaurants.length > 0
              ? <ScrollView>
                <RestaurantsList
                  location={this.state.location}
                  restaurants={this.props.restaurants}
                  handleOnPress={this.handleOnPress}
                  />
              </ScrollView>
            : <Text style={{textAlign: 'center'}}>No matches found...</Text>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants.restaurants,
    fetchingRestaurants: state.restaurants.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsView)
