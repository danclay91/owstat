
import React, { Component } from 'react'
import PlayerStats from './app/PlayerStats';
import JSONParse from './app/JSONParse';
import TitleScreen from './app/TitleScreen';
import SideMenu from './app/SideMenu';
import Background from './app/Background'; 
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import App from './app/App'

// var testRequestURL = 'https://api.lootbox.eu/psn/us/danclay91/profile'


var testRequestURL = 'https://api.lootbox.eu/psn/us/danclay91/profile'


export default class owstat extends Component {
  constructor() {
    super();
  }


/*
  componentDoesMount() {
    fetchData(testRequestURL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          playerInfo: responseData,
        });
      })
      .done();
  
}*/
/*
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="s1"
            component={PlayerStats}
            title="textinput"
            initial
            />

          <Scene
            key="data"
            component={JSONParse}
            title='user data'
            />
        </Scene>
      </Router>
    )
  }*/
}

AppRegistry.registerComponent('owstat', () => App)

//----for testing individual components
//AppRegistry.registerComponent('owstat',()=> PlayerStats); 