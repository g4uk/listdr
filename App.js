import React, { Component } from 'react'
import { AppLoading } from 'expo'
import HomeContainer from './screens/Home/index'

class App extends Component {
  state = {
    isReady: false
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    })
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
    return <HomeContainer />
  }
}

export default App
