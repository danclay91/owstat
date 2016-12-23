import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ListView,
    Image
} from 'react-native';


export default class JSONParse extends Component {
    constructor(props) {
        super(props);
        alert(props.message);
        this.state = {
            message: props.message,
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
    }

    componentDidMount() {
        if (this.state.message != null) {
            this.updateStatData();
        }
        alert(this.props.message);
        alert("no message");
        return; 
    }

    renderStat(stat) {
        return (
            <View style={styles.statContainer}>
                <Text style={styles.statName}>{stat.statName}: </Text>
                <Text style={styles.statValue}>{stat.statValue}</Text>
            </View>
        )
    }

    render() {
        if(this.state.message==null){
            return(
                <View>
                    <Text>No Data </Text>
                </View>
            )
        }

        return (
            <View style={styles.mainContainer}>
                <View style={styles.iconContainer}>
                    {this.renderPlayerIcon()}
                    {this.renderPlayerLevel()}
                    {this.renderPlayerRank()}
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderStat}
                    style={styles.listView}
                    />
            </View>
        )
    }

    renderPlayerIcon() {
        return (
            <Image
                source={{ uri: this._parseGeneralPlayerIcon() }}
                style={styles.playericon}
                />
        )
    }

    renderPlayerLevel() {
        return (
            <View style={styles.levelContainer}>
                <Image
                    source={{ uri: this._parseGeneralLevelFrame() }}
                    style={styles.levelframe}
                    />
                <Image
                    source={{ uri: this._parseGeneralLevelStars() }}
                    style={styles.levelstars}
                    />
            </View>
        )
    }

    renderPlayerRank() {
        return (
            <View style={styles.rankContainer}>
                <Image
                    source={{ uri: this._parseGeneralRankImage() }}
                    style={styles.rankImage}
                    />
                <Text style={styles.rank}>{this._parseGeneralRank()}</Text>
            </View>
        )
    }

    _parseGeneralRankImage() {
        return this.state.message.data.competitive.rank_img;
    }

    _parseGeneralRank() {
        return this.state.message.data.competitive.rank;
    }

    _parseGeneralLevelFrame() {
        return this.state.message.data.levelFrame;
    }

    _parseGeneralLevelStars() {
        return this.state.message.data.star;
    }

    _parseGeneralPlayerIcon() {
        return this.state.message.data.avatar;
    }

    _parseGeneralUsername() {
        return this.state.message.data.username;
    }

    updateStatData() {
        var data = this.parseGeneralPlayerInfo();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
        });

    }

    parseGeneralPlayerInfo() {
        var playerGeneralData = [];

        var jsonData = this.state.message;

        playerGeneralData.push(this._createStatObject("username", jsonData.data.username));
        playerGeneralData.push(this._createStatObject("level", jsonData.data.level));
        playerGeneralData.push(this._createStatObject("competitive hours", jsonData.data.playtime.competitive));
        playerGeneralData.push(this._createStatObject("Current Rank", this._parseGeneralRank()));

        return playerGeneralData;
    }

    _createStatObject(_statName, _statValue) {
        return {
            statName: _statName,
            statValue: _statValue
        };
    }
}
var styles = StyleSheet.create({
    mainContainer: {
        marginTop: 50,
    },
    iconContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rankContainer: {
        alignItems: 'center'
    },
    rankImage: {
        height: 50,
        width: 50,
    },
    rank: {
        marginTop: -10,
        fontSize: 15,
    },
    levelContainer: {
        alignItems: 'center',
    },
    levelframe: {
        height: 50,
        width: 50,
    },
    levelstars: {
        height: 30,
        width: 30,
        marginTop: -20,
    },
    statContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 10,
    },
    listView: {
        paddingTop: 10,
        backgroundColor: '#F5FCFF',
    },
    statName: {
        flex: 2,
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
    },

    statValue: {
        flex: 3,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    playericon: {
        height: 50,
        width: 50,
        alignItems: 'center',
    },
});



