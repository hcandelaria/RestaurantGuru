//flow
import React, { Component } from 'react'
import { Container, Content, Text, Card, CardItem, Left } from 'native-base'
import { connect } from 'react-redux'
import { Image, Linking } from 'react-native'

import ReviewsList from '../../Components/ReviewsList'
import CalculateDistances from '../../Transforms/CalculateDistances';
import reviews from '../../Fixtures/reviews.json'

const placeholder = 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png'

class RestaurantDetailsView extends Component {
  /**
   * Class constructor.
   */
  constructor (props, context) {
    super(props, context)
    this.state = {
      restaurant: this.props.navigation.state.params.restaurant,
      location: this.props.navigation.state.params.location
    }
  }

  componentDidMount () {

  }
  componentWillrecieveProps (nextProps) {

  }
  render () {
    return (
      <Container>
        <Text style={{textAlign: 'center'}}>Restaurant details</Text>
        <Content padder>
          <Card>
            <CardItem header>
              <Text>{` ${this.state.restaurant.name}`}</Text>
            </CardItem>
            <CardItem button onPress={() => Linking.openURL(this.state.restaurant.photos_url)}>
              <Image
                source={{uri: this.state.restaurant.thumb || placeholder}}
                style={{height: 200, width: null, flex: 1}}
                />
            </CardItem>
            <Left>
              <CardItem footer>
                <Text button onPress onPress={() => Linking.openURL(this.state.restaurant.menu_url)} >Menu </Text>
                <Text button onPress={() => Linking.openURL(this.state.restaurant.events_url)}> Events</Text>
              </CardItem>
            </Left>
            <Text>{` Distances: ${CalculateDistances(this.state.restaurant.location, this.state.location)}`} </Text>
            <Text>{` ${this.state.restaurant.location.address}`}</Text>
            <Text>{` ${this.state.restaurant.location.city}`}</Text>
            <Text>{` Average cost for two: ${this.state.restaurant.currency}${this.state.restaurant.average_cost_for_two}`}</Text>
            <Text style={{textAlign: 'center'}}>Reviews</Text>
            <ReviewsList reviews={reviews.all_reviews} />
          </Card>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailsView)
