import { LINE_STATUS_REQUEST, LINE_STATUS_COMPLETE, LINE_STATUS_ERROR } from 'tube-app/src/lineStatus/lineStatusActions.js'
import { SLOW_REQUEST } from 'tube-app/src/dataRequest/dataRequestActions.js'

const TOO_SLOW_MS = 1000;

const createSlowRequstService = () => {

  let timeout = undefined;

  return {
    [LINE_STATUS_REQUEST]: (action, dispatch, state) => {
      dispatch({ type: SLOW_REQUEST, payload: false })

      timeout = setTimeout(() => {
        dispatch({ type: SLOW_REQUEST, payload: true })
      }, TOO_SLOW_MS);
    },
    [LINE_STATUS_COMPLETE]: (action, dispatch, state) => {
      clearTimeout(timeout);
      dispatch({ type: SLOW_REQUEST, payload: false })
    },
    [LINE_STATUS_ERROR]: (action, dispatch, state) => {
      clearTimeout(timeout);
      dispatch({ type: SLOW_REQUEST, payload: false })
    }
  }

}

export default createSlowRequstService;