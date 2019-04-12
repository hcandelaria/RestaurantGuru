import React, { Component } from 'react';
import { Container, Content, Text, Card, CardItem, Left } from 'native-base';
import { connect } from 'react-redux'
import { Image, Linking } from 'react-native'


import ReviewsList from '../../Components/ReviewsList'

const placeholder = 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png';

class RestaurantDetailsView extends Component {
  /**
   * Class constructor.
   */
  constructor(props, context){
    super(props,context);
    this.state = {
      restaurant: this.props.navigation.state.params,
      all_reviews: [
        {
          "rating": "5",
          "review_text": "The best latte I've ever had. It tasted a little sweet",
          "id": "24127336",
          "rating_color": "305D02",
          "review_time_friendly": "2 months ago",
          "rating_text": "Insane!",
          "timestamp": "1435507367",
          "likes": "0",
          "user": {
            "name": "John Doe",
            "zomato_handle": "John",
            "foodie_level": "Super Foodie",
            "foodie_level_num": "9",
            "foodie_color": "f58552",
            "profile_url": "https://www.zomato.com/john",
            "profile_deeplink": "zoma.to/u/1170245",
            "profile_image": "string"
          },
          "comments_count": "0"
        }
      ]
    }
  }
  
  componentDidMount(){

  }
  componentWillrecieveProps(nextProps){

  }
  render() {

    return (
      <Container>
        <Text style={{textAlign: 'center',}}>Restaurant details</Text>
        <Content padder>
          <Card>
            <CardItem header>
              <Text>{` ${this.state.restaurant.name}`}</Text>
            </CardItem>
            <CardItem button onPress={ ()=> Linking.openURL(this.state.restaurant.photos_url) }>
              <Image
                source={{uri: this.state.restaurant.thumb || placeholder}}
                style={{height: 200, width: null, flex: 1}}
                />
            </CardItem>
            <Left>
              <CardItem footer>
                <Text button onPress onPress={()=> Linking.openURL(this.state.restaurant.menu_url)} >Menu </Text>
                <Text button onPress={()=> Linking.openURL(this.state.restaurant.events_url)}> Events</Text>
              </CardItem>
            </Left>
            <Text>{` ${this.state.restaurant.location.address}`}</Text>
            <Text>{` ${this.state.restaurant.location.city}`}</Text>
            <Text>{` Average cost for two: ${this.state.restaurant.currency}${this.state.restaurant.average_cost_for_two}`}</Text>
            <Text style={{textAlign: 'center',}}>Reviews</Text>
              <ReviewsList reviews={this.state.all_reviews}/>
          </Card>
        </Content>
      </Container>
    );
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
