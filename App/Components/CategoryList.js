//flow
import React, { Component } from 'react'
import { Content, Text, Card, CardItem, Body, Button } from 'native-base'

export default class CategoryList extends Component {
  componentDidMount () {

  }
  render () {
    return (
      <Content>
        {
          this.props.categories.map((category) =>
            <Button full large light
              key={category.categories.id}
              onPress={this.props.handleOnPress.bind(this, category.categories.id)} >
              <Text> { category.categories.name } </Text>
            </Button>
          )
        }
      </Content>
    )
  }
}
