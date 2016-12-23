import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PlayerStats extends Component {
    constructor() {
        super();
        this.state = {
            gametag: null,
            infoJSON: null
        };
    }
    /*
        openPlayerStats() {
            alert(this.state.gametag);
    
            fetch('https://api.lootbox.eu/psn/us/' + this.state.gametag + '/profile')
                .then((response) => response.json())
                .then((responseData) => {
                    alert(responseData);
                    this.setState({
                        infoJSON: responseData,
                    });
                    if (this.state.infoJSON.statusCode == 404) {
                        Alert.alert('Unable to find player');
                        return;
                    }
                    Alert.alert("this is infoJSON"); 
                    //Actions.playerData({ message: this.state.infoJSON });
                    Actions.playerData({ message: responseData });
                })
                .done();
        }*/

    fetchData() {
        fetch('https://api.lootbox.eu/psn/us/' + this.state.gametag + '/profile')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    infoJSON: responseData
                });
                //Actions.playerData({ message: responseData });
                //alert(this.state.infoJSON);
                Actions.playerData({message: responseData});
            })
            .done();
    }


    render() {
        return (
            <View style={{ marginTop: 50 }}>

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ gametag: text })}
                    />
                <Button
                    onPress={this.fetchData.bind(this)}
                    title="Search"
                    />
            </View>
        );
    }
}

