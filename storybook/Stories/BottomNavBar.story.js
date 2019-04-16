import React from 'react'
import { storiesOf } from '@storybook/react-native'

import BottomNavBar from '../../App/Components/BottomNavBar'

storiesOf('BottomNavBar', module)
  .add('Default', () => (
    <BottomNavBar />
  ))
