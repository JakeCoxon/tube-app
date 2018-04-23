import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ActivityIndicator, Image } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import _ from 'lodash'
import { getLinesById, getLineStatusById } from 'tube-app/src/selectors.js'
import DetailTitle from 'tube-app/src/components/DetailTitle.js'
import FavouriteButton from 'tube-app/src/components/FavouriteButton.js'
import NavigationStatusBar from 'tube-app/util/NavigationStatusBar.js'

import { Spacing, Margin, Padding, NegativeMargin, Row, Line, RegularText, SmallText, AppBarSpacing } from 'tube-app/src/components/presentation.js'


function niceName(name) {
  return name
    .replace(/underground station/i, '')
    .replace(/rail station/i, '')
}


import tfl from 'tube-app/assets/tfl.png'

function DetailScreen({ line, sortedStatuses, isGoodService, status, favouriteId }) {

  return (
    <View style={{backgroundColor: line.backgroundColor, flexGrow: 1}}>
      <NavigationStatusBar barStyle="light-content" />
      <AppBarSpacing />
      <ScrollView style={{flex:1}}>
        <Padding large>

          {isGoodService ? 
            <View>
              <Spacing y={128} />
              <View style={{flexGrow: 1, alignItems: 'center', }}>
                <Margin smallTop>
                  <Image source={tfl} />
                </Margin>
              </View>
              <Spacing largeY />
              <RegularText white style={{ textAlign: 'center', flexGrow: 1 }}>Good service on all routes</RegularText>
            </View> 
          : sortedStatuses.map((lineStatus, idx) => {
              return <View key={idx}>
                <SmallText white>Status update</SmallText>
                <Spacing smallY />
                <RegularText white>{lineStatus.statusSeverityDescription}</RegularText>
                <Spacing smallY />
                <Padding small style={{backgroundColor: 'white', borderRadius: 3}}>
                  <RegularText>{lineStatus.reason}</RegularText>
                </Padding>

                {lineStatus.disruption ? <View>
                  <Spacing largeY />

                  <SmallText white>Affected stops</SmallText>
                  <Spacing smallY />
                  <Row style={{flexWrap: 'wrap'}}>
                      {lineStatus.disruption.affectedStops.map((stop, idx) => {
                        return <Margin key={idx} smallRight smallBottom>
                          <Padding small style={{backgroundColor: 'white', borderRadius: 3}}>
                            <SmallText>{niceName(stop.commonName)}</SmallText>
                          </Padding>
                        </Margin>
                      })}
                  </Row>
                </View> : undefined}
                <Spacing smallY />
                <NegativeMargin largeX><Line color='white' /></NegativeMargin>
                <Spacing largeY />
              </View>

            })
          }
        </Padding>
      </ScrollView>
    </View>
  )
}

const wrapLoading = (Comp) => (props) => {
  if (props.status) return <Comp {...props} />
  return (
    <View style={{ backgroundColor: props.line.backgroundColor, flexGrow: 1, justifyContent: 'center' }}>
      <ActivityIndicator size='large' color='white' />
    </View>
  );
}

DetailScreen = wrapLoading(DetailScreen);

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: <DetailTitle navigation={navigation} />,
  headerRight: <FavouriteButton navigation={navigation} />,
  headerTransparent: true,
  headerTintColor: 'white',
  headerBackTitleStyle: {
    color: 'white'
  },
  headerStyle: {
    borderBottomColor: '#ffffff',
    elevation: 0,
  },
  headerTitleStyle: {
    color: 'white'
  },
})




import { TOGGLE_FAVOURITE } from 'tube-app/src/favourite/favouriteActions.js'

function mapStateToProps(state, props) {
  const { lineId } = props.navigation.state.params || {}
  const status = getLineStatusById(state)[lineId];

  return {
    line: state.lines.find(x => x.id == lineId),
    isLoading: state.lineStatus.status == 'loading',
    status: status,
    sortedStatuses: _.sortBy(status.lineStatuses, x => x.statusSeverity),
    isGoodService: status.lineStatuses.every(x => x.statusSeverity == 10),
    favouriteId: state.favourite
  }
}

function mapDispatchToProps(dispatch, props) {
  const { lineId } = props.navigation.state.params || {}

  return {
    onPressToggleFavourite: () => {
      dispatch({ type: TOGGLE_FAVOURITE, payload: lineId });
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
