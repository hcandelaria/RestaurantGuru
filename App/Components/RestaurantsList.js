import React, { Component } from 'react';
import { Content, Card, CardItem, Body, Icon, Left, Thumbnail, Text } from 'native-base';

const placeholder = 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png';

export default class RestaurantsList extends Component {

  componentDidMount(){

  }

  render() {
    return (
        <Content>
        {   
          this.props.restaurants.map( (restaurant) =>
            <Card
              key={restaurant.restaurant.id}
            >
              <CardItem
                button
                onPress={ this.props.handleOnPress.bind(this, restaurant.restaurant) }
              >
                <Left>
                  <Thumbnail square large source={{uri: restaurant.restaurant.thumb || placeholder}} />
                  <Body>
                    <CardItem header>
                      <Text> {restaurant.restaurant.name} </Text>
                    </CardItem>
                    <Text>{`Average cost: ${restaurant.restaurant.currency}${restaurant.restaurant.average_cost_for_two/2}`} </Text>
                    <Text>{`Rating: ${restaurant.restaurant.user_rating.aggregate_rating}/5 `}
                      <Icon
                        small
                        name='star'
                        style={{color: `${restaurant.restaurant.user_rating.aggregate_rating >= 4.5 ? `blue`: `black` }`}} />
                    </Text>
                    <Text>{`Cuisines: ${restaurant.restaurant.cuisines} `}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem footer>
                <Text>{`Location: ${restaurant.restaurant.location.locality} | Distance: N/A`}</Text>
              </CardItem>
            </Card>
          )
        }
        </Content>
    );
  }
}
