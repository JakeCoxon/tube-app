import { AsyncStorage } from 'react-native'

export const saveState = (state) => {
  return AsyncStorage.setItem('state', JSON.stringify(state));
}
export const loadState = (state) => {
  return AsyncStorage.getItem('state').then(x => JSON.parse(x) || undefined);
}

window.clearLocalStorage = () => {
  AsyncStorage.removeItem('state')
}