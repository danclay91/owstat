
import React, { Component } from 'react'
import App from './app/App'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'


// var testRequestURL = 'https://api.lootbox.eu/psn/us/danclay91/profile'


export default class owstat extends Component {
  

  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('owstat', () => owstat)
