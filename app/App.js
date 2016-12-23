
import React, { Component } from 'react'
import PlayerStats from './PlayerStats'
import JSONParse from './JSONParse'
import TitleScreen from './TitleScreen'
import SideMenu from './SideMenu'
import MyDrawer from './Drawer.js'
import Drawer from 'react-native-drawer'
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'


// var testRequestURL = 'https://api.lootbox.eu/psn/us/danclay91/profile'


export default class owstat extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    /* ---- for testing player stats screen 
        render() {
            return (
                <View>
                    <PlayerStats />
                </View>
            )
        }
        */
    render() {
        return (
            <Router>
                <Scene key="drawer" component={MyDrawer}>
                    <Scene key="main" tabs={true} >
                        <Scene key="base" component={PlayerStats} initial />
                        <Scene key="playerStats" component={PlayerStats} />
                        <Scene key="playerData" component={JSONParse} />
                    </Scene>
                </Scene>
            </Router>
        )
    }

    /* almost works, cannot add more scenes. 
      render() {
        return (
          <Drawer
            type="static"
            content={<SideMenu closeDrawer={() => this.drawer.close()} />}
            openDrawerOffset={100}
            tweenHandler={Drawer.tweenPresets.parallax}
            tapToClose={true}
            ref={(ref) => this.drawer = ref}
            >
    
            <Router>
              <Scene key="root" component={TitleScreen}>
                <Scene key="home" initial={true} />
              </Scene>
            </Router>
          </Drawer>
        )
      }*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
})


