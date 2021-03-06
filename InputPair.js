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



export default class InputPair extends Component {
    constructor() {
        super();
        this.state = {
            gametag: null,
            infoJSON: generalPlayerMockInfo,
        };
    }

    openPlayerStats() {

        fetch('https://api.lootbox.eu/psn/us/' + this.state.gametag + '/profile')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    infoJSON: responseData,
                });
                if (this.state.infoJSON.statusCode == 404) {
                    Alert.alert('Unable to find player');
                    return;
                }
                Actions.data({ message: this.state.infoJSON });
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
                    onPress={this.openPlayerStats.bind(this)}
                    title="Search"
                    />
            </View>
        );
    }
}

