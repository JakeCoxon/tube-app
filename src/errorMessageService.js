import { Alert } from 'react-native'
import { ERROR_MESSAGE } from 'tube-app/src/appActions.js'

const createErrorMessageService = () => {
  return {
    [ERROR_MESSAGE]: (action, dispatch, state) => {
      Alert.alert("Oops there was an error", action.payload);
    },
  }
}

export default createErrorMessageService;