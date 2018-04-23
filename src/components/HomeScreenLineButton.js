import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ActivityIndicator, StatusBar, Image } from 'react-native'
import _ from 'lodash'

import { LinearGradient } from 'expo'
import { MaterialIcons } from '@expo/vector-icons';

import { Row, Spacing, Margin, Padding, Layer, NegativeMargin, RegularText, SmallText, AppBarSpacing } from 'tube-app/src/components/presentation.js'

import tfl from 'tube-app/assets/tfl.png'

export default function HomeScreenLineButton({ line, isOkayShown, isOkay, onPress }) {
  return (
    <Margin key={line.id} smallRight smallBottom style={{ flex: 1 }}>
      <TouchableHighlight 
          onPress={onPress}
          underlayColor='rgba(0,0,0,0.3)'>
        <View>
          <Padding small style={{ backgroundColor: line.backgroundColor, borderRadius: 3, height: 100 }}>
            <Layer>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.15)']}
                start={[0, 0]}
                end={[0, 1]}
                style={{flexGrow: 1, borderRadius: 3}}
              />
            </Layer>
            <View style={{flexGrow: 1, alignItems: 'center', }}>
              <Margin smallTop>
                <Image source={tfl} style={{ width: 81/2, height: 65/2 }}/>
              </Margin>
            </View>
            <NegativeMargin x={4}>
              <Row style={{ alignItems: 'center' }}>
                <SmallText style={{color: 'white', textAlign: 'center', flexGrow: 1}}>{line.name}</SmallText>
              </Row>
            </NegativeMargin>
            <Layer style={{ alignItems: 'flex-end' }}>
              {!isOkayShown ? <View />
              : isOkay ? <Padding all={4}><MaterialIcons name="check" size={18} color='white' /></Padding>
              : <Padding all={4}><MaterialIcons name="error-outline" size={21} color='white' /></Padding>}
            </Layer>
          </Padding>
        </View>
      </TouchableHighlight>
    </Margin>
  )
}