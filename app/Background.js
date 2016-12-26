import React, { Component } from 'react';

import {

    Image,
    StyleSheet
} from 'react-native';

export default class Background extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image source={require('./images/omnicsbg.png')}
                resizeMode="stretch"
                style={styles.titleOverwatchLogo}>

                {this.props.children}


            </Image>
        );
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
