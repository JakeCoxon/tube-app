import React from 'react'
import renderer from 'react-test-renderer'
import PropTypes from 'prop-types'

import FavouriteButton from 'tube-app/src/components/FavouriteButton.js'
import { createStore } from 'redux'
import statusData from 'tube-app/data/testData1.js'
import lineData from 'tube-app/data/lineData.js'
import TestProvider from 'tube-app/test/TestProvider.js'

const render = (props) => 
  <TestProvider {...props}>
    <FavouriteButton {...props} />
  </TestProvider>

it('renders unfavourited', () => {

  const props = {
    navigationParams: {
      lineId: 'dlr'
    },
    storeState: {
      favourite: undefined
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders favourited', () => {

  const props = {
    navigationParams: {
      lineId: 'dlr'
    },
    storeState: {
      favourite: 'dlr'
    }
  }

  const tree = renderer
    .create(render(props))
    .toJSON();
  expect(tree).toMatchSnapshot();
});



