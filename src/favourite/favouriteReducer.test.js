// import React from 'react';
// import App from './App';

// import renderer from 'react-test-renderer';

import favouriteReducer from 'tube-app/src/favourite/favouriteReducer.js'
import { TOGGLE_FAVOURITE } from 'tube-app/src/favourite/favouriteActions.js'

it('favourites a line', () => {
  expect(
    favouriteReducer(null, { type: TOGGLE_FAVOURITE, payload: "id-123" })
  ).toBe("id-123")
});

it('unfavourites a line', () => {
  expect(
    favouriteReducer("id-123", { type: TOGGLE_FAVOURITE, payload: "id-123" })
  ).toBe(null)
});
