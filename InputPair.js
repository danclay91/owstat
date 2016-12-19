import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class InputPair extends Component {
    constructor() {
        super();
        this.state = {
            gametag: null,
        };
    }

    render() {
        return (
            <View>

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ gametag: text })}
                    />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.gametag}
                    />
            </View>
        );
    }
}

