import React from 'react'
import { storiesOf } from '@storybook/react-native'

import DropDownMenu from '../../App/Components/DropDownMenu'
import cities from '../../App/Fixtures/cities.json'

const onValueChange = () => {
  console.log('storybook testing')
  // console.log('onValueChange', value);
}
const selected = 0

storiesOf('DropDownMenu', module)
  .add('Default', () => (
    <DropDownMenu
      selected={selected}
      onValueChange={onValueChange}
      cities={cities.location_suggestions}
    />
  ))
