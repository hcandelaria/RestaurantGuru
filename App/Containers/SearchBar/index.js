//flow
import React, { Component } from 'react'
import { Item, Icon, Input, Text } from 'native-base'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import RestaurantsActions from '../../Redux/RestaurantsRedux'

class RestaurantsView extends Component {
  /**
   * Class constructor.
   */
  constructor (props, context) {
    super(props, context)

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (text) {
    payload = {
      searchQuery: text,
      category: this.props.category,
      city_id: this.props.city_id
    }
    this.props.updateSearchQuery(payload)
  }
  componentDidMount () {
  }
  render () {
    return (
      <Item rounded>
        <Icon name='ios-search' />
        <Input
          placeholder='Search'
          value={this.props.searchQuery}
          onChangeText={this.handleOnChange.bind(this)}
        />
      </Item>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.restaurants.searchQuery,
    city_id: state.cities.city_id,
    category: state.categories.category,
    fetching: state.restaurants.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchQuery: (payload) => {
      dispatch(RestaurantsActions.updateSearchQuery(payload))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsView)
