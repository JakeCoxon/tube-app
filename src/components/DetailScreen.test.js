import React from 'react'
import renderer from 'react-test-renderer'
import PropTypes from 'prop-types'

import DetailScreen from 'tube-app/src/components/DetailScreen.js'
import { createStore } from 'redux'
import statusData from 'tube-app/data/testData1.js'
import lineData from 'tube-app/data/lineData.js'
import TestProvider from 'tube-app/test/TestProvider.js'

const render = (props) => 
  <TestProvider {...props}>
    <DetailScreen {...props} />
  </TestProvider>

it('renders good service', () => {

  const props = {
    navigationParams: {
      lineId: 'dlr'
    },
    storeState: {
      lineStatus: {
        status: 'completed',
        data: statusData
      },
      lines: lineData,
      favourite: undefined
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders favourite', () => {

  const props = {
    navigationParams: {
      lineId: 'dlr'
    },
    storeState: {
      lineStatus: {
        status: 'completed',
        data: statusData
      },
      lines: lineData,
      favourite: 'dlr'
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders statuses', () => {

  const props = {
    navigationParams: {
      lineId: 'central'
    },
    storeState: {
      lineStatus: {
        status: 'completed',
        data: statusData
      },
      lines: lineData,
      favourite: undefined
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders loading', () => {

  const props = {
    navigationParams: {
      lineId: 'dlr'
    },
    storeState: {
      lineStatus: {
        status: 'loading',
      },
      lines: lineData,
      favourite: undefined
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});


