import React from 'react'
import _ from 'lodash'
import { View } from 'react-native'
import { Row } from 'tube-app/src/components/presentation.js'

export default function ThreeGrid({ children }) {
  const array = React.Children.toArray(children);
  return _.chunk(array, 3).map(([col1, col2, col3], idx) => 
    <Row key={idx}>
      {col1}
      {col2 ? col2 : <View style={{flex: 1}} />}
      {col3 ? col3 : <View style={{flex: 1}} />}
    </Row>
  )
}