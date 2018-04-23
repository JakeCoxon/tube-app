import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ActivityIndicator, Alert } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Row, Spacing, Margin, Padding, Layer } from 'tube-app/src/components/presentation.js'

import { TOGGLE_FAVOURITE } from 'tube-app/src/favourite/favouriteActions.js'

const lineIdFromProps = (props) => {
  const { lineId } = props.navigation.state.params || {}
  return lineId;
}

const mapStateToProps = (state, props) => ({
  isFavourite: state.favourite == lineIdFromProps(props),
})

const mapDispatchToProps = (dispatch, props) => ({
  onPressToggle: (isCurrentlyFavourite) => {
    const toggle = () => dispatch({ type: TOGGLE_FAVOURITE, payload: lineIdFromProps(props) })

    Alert.alert(
      isCurrentlyFavourite ? "This line is currently favourited" : "This line is not currently favourited",
      '',
      [
        isCurrentlyFavourite ? { text: 'Unfavourite this line', onPress: toggle }
        : { text: 'Favourite this line', onPress: toggle },
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      ],
    )
    
  }
})

function FavouriteButton({ isFavourite, onPressToggle }) {
  return <TouchableHighlight 
          onPress={() => onPressToggle(isFavourite)}
          underlayColor='rgba(0,0,0,0.3)'>
        <Padding small>
          <MaterialCommunityIcons name={isFavourite ? 'heart' : 'heart-outline'} color='white' size={24} />
        </Padding>
      </TouchableHighlight>
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton)

 