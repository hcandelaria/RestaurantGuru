import React, { Component } from 'react';
import { Content, Card, CardItem, Body, Icon, Left, Thumbnail, Text } from 'native-base';

const placeholder = 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png';

export default class RestaurantsList extends Component {
  
  calculateDistance(destination){
    try {
      navigator.geolocation.getCurrentPosition(
          position => {
              const location = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
              };
          },
          (error) =>  error,
      );
    }catch(e) {
      alert(e.message);
    }
    if ((destination.latitude == location.latitude) && (destination.longitude == location.longitude)) {
      return 0;
    }
    let destinationRadLat = Math.PI * destination.latitude/180;
		let locationRadLat = Math.PI * location.latitude/180;
		let theta = destination.longitude-location.longitude;
		let radtheta = Math.PI * theta/180;
		let dist = Math.sin(destinationRadLat) * Math.sin(locationRadLat) + Math.cos(destinationRadLat) * Math.cos(locationRadLat) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		return dist;
  }
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
