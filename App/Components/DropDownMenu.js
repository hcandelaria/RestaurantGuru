import React, { Component } from 'react';
import { Icon, Content, Form, Item, Picker } from 'native-base';

export default class DropDownMenu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Content>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.props.selected} onValueChange={this.props.onValueChange}
            >
              <Picker.Item label="Select City" value={0} />
              {
                this.props.cities.map(cities => 
                  <Picker.Item
                    key={cities.id}
                    label={cities.name}
                    value={cities.id}/>
                )
              }
            </Picker>
          </Item>
        </Form>
      </Content>
    );
  }
} 
