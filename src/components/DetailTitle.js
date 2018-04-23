import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash'
import { getLinesById } from 'tube-app/src/selectors.js'

import { Spacing, Margin, Padding } from 'tube-app/src/components/presentation.js'

const mapStateToProps = (state, props) => {
  const { lineId } = props.navigation.state.params || {}    
  const lineName = getLinesById(state)[lineId].name
  return { lineName }
}

function DetailTitle({ lineName }) {
  return <Text>{lineName}</Text>
}

export default connect(mapStateToProps)(DetailTitle)