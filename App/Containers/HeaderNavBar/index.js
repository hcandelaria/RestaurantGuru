import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Header, Icon, Button, Text, Body, Left, Title, Right } from 'native-base';

import CitiesActions from '../../Redux/CitiesRedux'
import DropDownMenu from '../../Components/DropDownMenu';


class HeaderNavBar extends Component {

  constructor(props) {
    super(props);
    this.state={
      selected: props.city_id,
    }
  }
  onValueChange(value) {
    this.setState({selected: value})
    const payload= {city_id: value}
    this.props.updateCity_id(payload)
  }
  componentDidMount(){
    payload = {
      query: 'New York'
    }
    this.props.getCities(payload);
  }
  componentWillReceiveProps(nextProps){   
  }
  render(){
    return(
      <Header>
        <Left>
          {
            this.props.navigation.state.routes.length  > 1 ?
              <Button transparent onPress={ () => this.props.navigation.pop() }>
                <Icon name='arrow-back' />
                <Text>Back</Text>
              </Button>
            :
              <Text></Text>
          }
        </Left>
        <Body>
          <Title>RestaurantGuru</Title>
        </Body>
        <Right>
          {
            this.props.navigation.state.routes.length !== 3 ?
            <DropDownMenu
              selected={this.state.selected}
              onValueChange={this.onValueChange.bind(this)} 
              cities={this.props.cities}
            />
            :
              <Text></Text>
          }
        </Right>
      </Header>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    city_id: state.cities.city_id,
    cities: state.cities.cities,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCity_id: (payload) => {
      return dispatch(CitiesActions.updateCity_id(payload));
    },
    getCities: (payload) => {
      dispatch(CitiesActions.getCitiesRequest(payload));
    } 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavBar)