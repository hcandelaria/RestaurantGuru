//flow
import React, { Component } from 'react'
import { Container, Text } from 'native-base'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import CategoryList from '../../Components/CategoryList'
import CategoriesActions from '../../Redux/CategoriesRedux'
import RestaurantsActions from '../../Redux/RestaurantsRedux'
import CitiesActions from '../../Redux/CitiesRedux'

import Loading from '../../Components/Loading'

import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

class CategoriesView extends Component {
  /**
   * Class constructor.
   */
  constructor (props, context) {
    super(props, context)

    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress (category) {
    if (this.props.city_id.city_id === 0) {
      Alert.alert('Please choose a city')
    } else {
      const payload = {
        category: category,
        city_id: this.props.city_id
      }
      this.props.updateCategory({ category: category })
      this.props.getRestaurants(payload)
      this.props.navigation.navigate('RestaurantsView')
    }
  }
  componentDidMount () {
    this.props.getAllCategories()
  }
  componentWillReceiveProps (nextProps) {
  }
  render () {
    return (
      <Container>
        <Text style={{textAlign: 'center'}}>Choose a category</Text>
        {
          this.props.fetchingCategories
            ? <Loading />
          : <ScrollView>
            <CategoryList
              categories={this.props.categories}
              handleOnPress={this.handleOnPress}
              />
          </ScrollView>
        }
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    fetchingCategories: state.categories.fetching,
    restaurants: state.restaurants.restaurants,
    city_id: state.cities.city_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: () => {
      dispatch(CategoriesActions.getCategoriesRequest())
    },
    getRestaurants: (payload) => {
      dispatch(RestaurantsActions.getRestaurantsRequest(payload))
    },
    getCities: (payload) => {
      dispatch(CitiesActions.getCitiesRequest(payload))
    },
    updateCategory: (payload) => {
      dispatch(CategoriesActions.updateCategory(payload))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesView)
