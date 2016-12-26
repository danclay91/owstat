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

export default class TitleScreen extends Component {
  /*
    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#2a3751', alignItems:'center' }}>
          <Text style = {{ fontFamily: 'sans-serif',fontWeight:'bold', fontSize:50,marginTop:60, }}>OVERWATCH</Text>
          <Text style={{fontSize:30}}>Some Name</Text>
          <Image source={require('./images/omnicsbg.png')}
            resizeMode="stretch"
            style={styles.titleOverwatchLogo}>
  
          </Image>
        </View>
      )
    }*/

  render() {
    return (

      <Image source={require('./images/omnicsbg.png')}
        resizeMode="stretch"
        style={styles.titleOverwatchLogo}>
        <View>
          <Text style={{ marginTop: 80}}>default font: TITLE APP GO HERE</Text>
          <Text style={{ marginTop: 80, fontFamily:'koverwatch'}}>modified font: TITLE APP GO HERE</Text>
        </View>
      </Image>

    )
  }
}

var styles = StyleSheet.create({
  titleText: {
    marginTop: 80,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  titleOverwatchLogo: {
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'transparent',
  }
});
