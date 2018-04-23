import { SLOW_REQUEST } from './dataRequestActions.js'
import { LINE_STATUS_REQUEST } from 'tube-app/src/lineStatus/lineStatusActions.js'

export default function dataRequestReducer(state = {}, action) {
  if (action.type == LINE_STATUS_REQUEST) {
    return { ...state, isUserInitiated: action.isUserInitiated };
  }
  if (action.type == SLOW_REQUEST) {
    return { ...state, isSlowRequest: action.payload };
  }

  return state
}
