import React from 'react'
import _ from 'lodash'
import { View, ActivityIndicator } from 'react-native'
import { Row, Padding, Spacing, RegularText } from 'tube-app/src/components/presentation.js'

export default function TooLongPane() {
  return (
    <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center' }} pointerEvents='none'>
      <View style={{ backgroundColor: '#000000cc', borderRadius: 3 }}>
        <Padding large>
          <ActivityIndicator size='large' color='white' />
          <Spacing largeY />
          <RegularText style={{color:'white', textAlign: 'center', width: 200}}>Fetching data is taking longer than usual</RegularText>
        </Padding>
      </View>
    </View>
  )
}