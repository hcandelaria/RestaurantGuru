//flow
import React, { Component } from 'react'
import { Content, Text, Card, CardItem, Body, Button, Icon, Left, Container} from 'native-base'
import { connect } from 'react-redux'

export default class CategoryList extends Component {
  render () {
    return (
      <Content>
        {
          this.props.reviews
            ? this.props.reviews.map((review, index) =>

              <Container
                key={index}
              >
                <Left>
                  <Text>{` ${review.user.name}: ${review.review_text}`}</Text>
                  <Text>
                    <Icon
                      small
                      name='thumbs-up'
                      />
                    {` ${review.likes} ${review.rating}/5` }
                  </Text>
                </Left>
              </Container>
            )
          : <Text>Reviews are not available at this moment.</Text>

        }
      </Content>
    )
  }
}
