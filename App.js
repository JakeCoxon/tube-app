import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import _ from 'lodash'

import HomeScreen from 'tube-app/src/components/HomeScreen.js'
import DetailScreen from 'tube-app/src/components/DetailScreen.js'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import listenerMiddleware from 'tube-app/util/listenerMiddleware.js'
import { loadState, saveState } from 'tube-app/util/localStorage.js'

import reduxLogger from 'redux-logger'
import { APP_START } from 'tube-app/src/appActions.js'
import { RESET_STATE } from 'tube-app/src/resetState/resetStateActions.js'

import linesReducer from 'tube-app/src/lines/linesReducer.js'
import linesStatusReducer from 'tube-app/src/lineStatus/lineStatusReducer.js'
import dataRequestReducer from 'tube-app/src/dataRequest/dataRequestReducer.js'
import favouriteReducer from 'tube-app/src/favourite/favouriteReducer.js'
import resetStateReducer from 'tube-app/src/resetState/resetStateReducer.js'

import createDataFetchingService from 'tube-app/src/dataFetchingService.js'
import createSlowRequestService from 'tube-app/src/slowRequestService.js'
import createErrorMessageService from 'tube-app/src/errorMessageService.js'

import { Font } from 'expo'

const fonts = {
  'museo-sans-300': require('./assets/museo-sans-300.ttf'),
  'museo-sans-500': require('./assets/museo-sans-500.ttf'),
};

const dataFetchingContext = {
  apiCall: () => fetch('https://api.tfl.gov.uk/Line/Mode/tube,dlr,overground/Status?detail=true').then(res => res.json())
// -- For debugging ----------
//  apiCall: () => new Promise((r, e) => { setTimeout(() => r(require('tube-app/data/testData2.js').default), 200) })
}


const store = createStore(resetStateReducer(combineReducers({
  lines: linesReducer,
  lineStatus: linesStatusReducer,
  dataRequest: dataRequestReducer,
  favourite: favouriteReducer
})), applyMiddleware(
  listenerMiddleware(
    createDataFetchingService(dataFetchingContext),
    createSlowRequestService(),
    createErrorMessageService()
  ),
  reduxLogger
));

const loadApp = () => {
  const initialStateLoad = loadState().then(state => {
    store.dispatch({ type: RESET_STATE, payload: state });
  });

  const loadFonts = Font.loadAsync(fonts);

  return Promise.all([initialStateLoad, loadFonts]).then(() => {
    store.dispatch({ type: APP_START });
    startSavingState();
  });
}

const startSavingState = () => {
  store.subscribe(() => {
    saveState({
      favourite: store.getState().favourite
    });
  });
}


export const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});


export default class App extends React.Component {
  state = { loaded: false }
  componentDidMount() {
    loadApp().then(() => this.setState({ loaded: true }))
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.loaded ? <AppNavigator /> : <View />}
      </Provider>
    );
  }
}


