import { RESET_STATE } from './resetStateActions.js'

// Higher order reducer
const loadStateReducer = (reducer) => (state, action) => {
  if (action.type == RESET_STATE) {
    state = action.payload;
  }
  return reducer(state, action);
}
export default loadStateReducer;