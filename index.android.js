/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import InputPair from './InputPair';
import JSONParse from './app/JSONParse';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

// Just for development, delete when done. 
var generalPlayerMockInfo = {
  "data": {
    "username": "danclay91",
    "level": 285,
    "games": {
      "quick": {
        "wins": "512"
      },
      "competitive": {
        "wins": "69",
        "lost": 83,
        "played": "152"
      }
    },
    "playtime": {
      "quick": "132 hours",
      "competitive": "32 hours"
    },
    "avatar": "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x0250000000000D76.png",
    "competitive": {
      "rank": "2896",
      "rank_img": "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-5.png"
    },
    "levelFrame": "https://blzgdapipro-a.akamaihd.net/game/playerlevelrewards/0x025000000000092A_Border.png",
    "star": "https://blzgdapipro-a.akamaihd.net/game/playerlevelrewards/0x025000000000092A_Rank.png"
  }
};

var testRequestURL = 'https://api.lootbox.eu/psn/us/danclay91/profile'


export default class owstat extends Component {
  constructor() {
    super();
    this.state = {
      gametag: 'danclay91',
      playerInfo: null,
    };
  }

  componentDoesMount() {
    fetchData(testRequestURL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          playerInfo: responseData,
        });
      })
      .done();
  }

render() { 
  return(
    <Router> 
      <Scene key="root">
        <Scene 
          key = "s1"
          component = {InputPair}
          title = "textinput"
          initial
          />

        <Scene 
          key = "data"
          component = {JSONParse}
          title = 'user data'
          />
      </Scene>
    </Router>
  )
}

  //------------- TODO: Replace current render with this one. 
  /*  render() {
      return (
        <View>
          <InputPair />
          <JSONParse message={this.state.playerInfo}/>
        </View>
      );
    }
  */

  /* -----------------Works but no Router 
    render() {
      return (
        <View>
          <InputPair />
          <JSONParse message={generalPlayerMockInfo}/>
        </View>
      );
    }*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('owstat', () => owstat);
