import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ListView,
  Image
} from 'react-native'

export default class SideMenu extends Component{
    openPlayerStats(){
        Actions.playerStats({});
    }

    openTitleScreen(){
        Actions.base({});
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor: 'black',}}>
                <View >
                    <Button style ={{backgroundColor:'black'}} title="base" onPress={this.openTitleScreen}>Home</Button>
                    <Button title="playerStats" onPress={this.openPlayerStats}>Player Stats</Button>
                </View>
            </View>
        )
    }
}