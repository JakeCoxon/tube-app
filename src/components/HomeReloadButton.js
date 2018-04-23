import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash'

import { Row, Spacing, Margin, Padding } from 'tube-app/src/components/presentation.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LINE_STATUS_REQUEST } from 'tube-app/src/lineStatus/lineStatusActions.js'


const mapStateToProps = (state) => ({
  isLoading: state.lineStatus.status == 'loading',
  isUserInitiated: state.dataRequest.isUserInitiated,
})
const mapDispatchToProps = (dispatch, props) => ({
  onPressRefresh: () => {
    dispatch({ type: LINE_STATUS_REQUEST, isUserInitiated: true })
  }
})

function HomeRightButton({ isLoading, isUserInitiated, onPressRefresh }) {
  return isLoading && isUserInitiated ? 
    <Padding small><ActivityIndicator color='black' /></Padding>
    : <TouchableHighlight 
          onPress={isLoading ? undefined : onPressRefresh}
          underlayColor='rgba(0,0,0,0.3)'>
        <Padding small><MaterialCommunityIcons name="reload" size={24} /></Padding>
      </TouchableHighlight>
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeRightButton)

 