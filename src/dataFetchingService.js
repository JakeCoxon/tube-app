import { LINE_STATUS_REQUEST, LINE_STATUS_COMPLETE, LINE_STATUS_ERROR } from 'tube-app/src/lineStatus/lineStatusActions.js'
import { ERROR_MESSAGE, APP_START } from 'tube-app/src/appActions.js'

const createDataFetchingService = (context) => {

  let isLoading = false;

  return {
    [APP_START]: (action, dispatch, state) => {
      // When the app starts the app should load the line statuses
      dispatch({ type: LINE_STATUS_REQUEST });
    },

    [LINE_STATUS_REQUEST]: (action, dispatch, state) => {
      if (isLoading) return;
      isLoading = true;

      context.apiCall().then((data) => {
        isLoading = false;
        dispatch({ type: LINE_STATUS_COMPLETE, payload: data })
      }, (error) => {
        isLoading = false;
        dispatch({ type: ERROR_MESSAGE, payload: "There was an error fetching status updates. Please check your internet connection" })
        dispatch({ type: LINE_STATUS_ERROR, error: error })
      });

    }
  }
}

export default createDataFetchingService;