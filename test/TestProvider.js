import React from 'react'
import PropTypes from 'prop-types'

import { createStore } from 'redux'

export default class TestProvider extends React.Component {
  static propTypes = {
    navigationParams: PropTypes.object.isRequired,
    storeState: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    store: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  getChildContext() {
    const { navigationParams, storeState } = this.props

    // Provides some fake properties for react-navigation and redux store
    return {
      navigation: {
        isFocused: () => true,
        addListener: () => {},
        state: {
          params: navigationParams
        }
      },
      store: {
        dispatch: () => {},
        subscribe: () => {},
        getState: () => storeState
      }
    }
  }
  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return React.Children.only(React.cloneElement(this.props.children,
      this.getChildContext()
    ));
  }
}