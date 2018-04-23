import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ActivityIndicator, StatusBar, Image } from 'react-native'

import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import _ from 'lodash'
import { getLineOkayById } from 'tube-app/src/selectors.js'
import HomeReloadButton from 'tube-app/src/components/HomeReloadButton.js'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Row, Spacing, Margin, Padding, Layer, NegativeMargin, RegularText, SmallText, AppBarSpacing } from 'tube-app/src/components/presentation.js'

function HomeScreen({ isLoading, isSlowRequest, lines, favouriteLine, isOkayByLineId, onPressLine, onPressRefresh }) {

  const lineItem = line => 
    <LineRow
        key={line.id}
        line={line} 
        isOkayShown={isOkayByLineId != undefined}
        isOkay={isOkayByLineId && isOkayByLineId[line.id]}
        onPress={() => onPressLine(line.id)}
    />

  const otherLines = lines.filter(x => x != favouriteLine);

  const chunks = _.chunk(otherLines, 3).map(([line1, line2, line3], idx) => 
    <Row key={idx}>
      {lineItem(line1)}
      {line2 ? lineItem(line2) : <View style={{flex: 1}} />}
      {line3 ? lineItem(line3) : <View style={{flex: 1}} />}
    </Row>
  )

  return (
    <View style={{flexGrow: 1, backgroundColor: '#EEEEEE'}}>
      <StatusBar barStyle="dark-content" />
      <AppBarSpacing />
      <ScrollView style={{flex : 1}}>
      
      {favouriteLine ? 
        <Padding smallLeft smallTop>
          <Padding smallTop smallBottom><RegularText>Favourite line</RegularText></Padding>
          <Row>
            {lineItem(favouriteLine)}
            <View style={{flex: 2}} />
          </Row>
          <Padding smallTop smallBottom><RegularText>Other lines</RegularText></Padding>
          {chunks}
        </Padding>
      : <Padding smallLeft smallTop>
          <Padding smallTop smallBottom><RegularText>All lines</RegularText></Padding>
          {chunks}
        </Padding>}
        <Spacing smallY />
      </ScrollView>

      {isSlowRequest ? <Layer><TooLongPane /></Layer> : undefined}
      
    </View>
  )
}

function TooLongPane() {
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

import tfl from 'tube-app/assets/tfl.png'

function LineRow({ line, isOkayShown, isOkay, onPress }) {
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

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: `TFL Status`,
  headerTransparent: true,
  headerRight: <HomeReloadButton />,
  headerBackTitle: null
})

function mapStateToProps(state) {
  return {
    isSlowRequest: state.dataRequest.isSlowRequest,
    lines: state.lines,
    favouriteLine: state.favourite ? state.lines.find(x => x.id == state.favourite) : undefined,
    isOkayByLineId: getLineOkayById(state)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    onPressLine: (lineId) => props.navigation.navigate('Detail', { lineId })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

