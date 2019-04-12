import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { connect } from 'react-redux'

import { ScrollView } from 'react-native-gesture-handler';
import Loading from '../../Components/Loading'
import RestaurantsList from '../../Components/RestaurantsList'
import SearchBar from '../SearchBar'

class RestaurantsView extends Component {
  /**
   * Class constructor.
   */
  constructor(props, context){
    super(props,context);

    this.handleOnPress = this.handleOnPress.bind(this);
  }
  
  handleOnPress(restaurant){
    this.props.navigation.navigate('RestaurantDetailsView', restaurant)
  }
  componentDidMount(){
  }
  render() {

    return (
      <Container>
        <Text style={{textAlign: 'center'}}>Choose a restaurant</Text>
        <SearchBar/>
        {
          this.props.fetchingRestaurants ?
            <Loading/>
          :
            this.props.restaurants.length > 0 ?
              <ScrollView>
                <RestaurantsList
                  restaurants={this.props.restaurants}
                  handleOnPress={this.handleOnPress}
                  />
              </ScrollView>
            :
              <Text style={{textAlign: 'center'}}>No matches found...</Text>
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants.restaurants,
    fetchingRestaurants: state.restaurants.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsView)
