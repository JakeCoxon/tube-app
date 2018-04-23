import React from 'react'
import renderer from 'react-test-renderer'
import PropTypes from 'prop-types'

import HomeScreen from 'tube-app/src/components/HomeScreen.js'
import { createStore } from 'redux'
import statusData from 'tube-app/data/testData1.js'
import lineData from 'tube-app/data/lineData.js'
import TestProvider from 'tube-app/test/TestProvider.js'

const render = (props) => 
  <TestProvider {...props}>
    <HomeScreen {...props} />
  </TestProvider>

it('renders normally', () => {

  const props = {
    navigationParams: {},
    storeState: {
      lineStatus: {
        status: 'completed',
        data: statusData
      },
      lines: lineData,
      favourite: undefined,
      dataRequest: {
        isSlowRequest: true
      }
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders favourite', () => {

  const props = {
    navigationParams: {},
    storeState: {
      lineStatus: {
        status: 'completed',
        data: statusData
      },
      lines: lineData,
      favourite: 'dlr',
      dataRequest: {
        isSlowRequest: true
      }
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders loading', () => {

  const props = {
    navigationParams: {},
    storeState: {
      lineStatus: {
        status: 'loading',
      },
      lines: lineData,
      favourite: undefined,
      dataRequest: {
        isSlowRequest: true
      }
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders slow request', () => {

  const props = {
    navigationParams: {},
    storeState: {
      lineStatus: {
        status: 'loading',
      },
      lines: lineData,
      favourite: undefined,
      dataRequest: {
        isSlowRequest: true
      }
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});


