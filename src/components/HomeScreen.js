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
import ThreeGrid from 'tube-app/src/components/ThreeGrid.js'
import TooLongPane from 'tube-app/src/components/TooLongPane.js'
import HomeScreenLineButton from 'tube-app/src/components/HomeScreenLineButton.js'

function HomeScreen({ isLoading, isSlowRequest, otherLines, favouriteLine, isOkayByLineId, onPressLine, onPressRefresh }) {

  const lineButtons = otherLines.map((line) => 
    <HomeScreenLineButton
      key={line.id}
      line={line} 
      isOkayShown={isOkayByLineId != undefined}
      isOkay={isOkayByLineId && isOkayByLineId[line.id]}
      onPress={() => onPressLine(line.id)}
    />)

  return (
    <View style={{flexGrow: 1, backgroundColor: '#EEEEEE'}}>
      <StatusBar barStyle="dark-content" />
      <AppBarSpacing />
      <ScrollView style={{flex : 1}}>
      
      {favouriteLine ? 
        <Padding smallLeft smallTop>
          <Padding smallTop smallBottom><RegularText>Favourite line</RegularText></Padding>
          <Row>
            <LineRow
              key={favouriteLine.id}
              line={favouriteLine} 
              isOkayShown={isOkayByLineId != undefined}
              isOkay={isOkayByLineId && isOkayByLineId[favouriteLine.id]}
              onPress={() => onPressLine(favouriteLine.id)}
            />
            <View style={{flex: 2}} />
          </Row>
          <Padding smallTop smallBottom><RegularText>Other lines</RegularText></Padding>
          <ThreeGrid children={lineButtons} />
        </Padding>
      : <Padding smallLeft smallTop>
          <Padding smallTop smallBottom><RegularText>All lines</RegularText></Padding>
          <ThreeGrid children={lineButtons} />
        </Padding>}
        <Spacing smallY />
      </ScrollView>

      {isSlowRequest ? <Layer><TooLongPane /></Layer> : undefined}
      
    </View>
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
    otherLines: state.lines.filter(x => x.id != state.favourite),
    isOkayByLineId: getLineOkayById(state)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    onPressLine: (lineId) => props.navigation.navigate('Detail', { lineId })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

