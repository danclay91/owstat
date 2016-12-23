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

  render() {
    return (
      <View>
        <Text style={styles.titleText}>Title Screen</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  titleText:{
    marginTop:80
  }
});
