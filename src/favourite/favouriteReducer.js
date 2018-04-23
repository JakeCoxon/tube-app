
import { TOGGLE_FAVOURITE } from './favouriteActions.js'

export default function favouriteReducer(state = null, action) {
  if (action.type == TOGGLE_FAVOURITE) {
    if (state == action.payload) return null
    else return action.payload;
  }

  return state
}
