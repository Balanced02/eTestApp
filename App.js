import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { StyleProvider } from 'native-base'
// import * as Expo from 'expo'

import Main from './js/index'

import getTheme from './js/themes/components'
import variables from './js/themes/variables/commonColor'
import configureStore from './js/store'

let store = configureStore(() => {})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      store,
    }
  }

  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //   })
  //   this.setState({ ready: true })
  // }
  render() {
    
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <Main />
        </Provider>
      </StyleProvider>
    )
  }
}
