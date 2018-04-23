import React from 'react'
import { StatusBar, View } from 'react-native'
import { withNavigationFocus } from 'react-navigation'

export default withNavigationFocus(({ isFocused, ...rest }) => 
  isFocused ? <StatusBar {...rest} /> : <View />)