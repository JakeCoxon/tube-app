import React from 'react'
import renderer from 'react-test-renderer'
import PropTypes from 'prop-types'

import DetailTitle from 'tube-app/src/components/DetailTitle.js'
import { createStore } from 'redux'
import statusData from 'tube-app/data/testData1.js'
import lineData from 'tube-app/data/lineData.js'
import TestProvider from 'tube-app/test/TestProvider.js'

const render = (props) => 
  <TestProvider {...props}>
    <DetailTitle {...props} />
  </TestProvider>

it('renders', () => {

  const props = {
    navigationParams: {
      lineId: 'dlr'
    },
    storeState: {
      lines: lineData,
      favourite: undefined
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders', () => {

  const props = {
    navigationParams: {
      lineId: 'hsmith-city'
    },
    storeState: {
      lines: lineData,
      favourite: undefined
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});


