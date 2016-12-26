import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ListView,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Background from './Background';


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

    renderGeneralStatInfo() {
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

    render() {

        /*
        <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderStat}
*/
        /*
                return (
                    <Image source={require('./images/omnicsbg.png')}
                        resizeMode="stretch"
                        style={{ flex: 1 }}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex:1}}>
                            <Text>Hi</Text>
                            <Text>There</Text>
                        
        
        
                        </View>
                    </Image>
                )
            }*/
        var width = Dimensions.get('window').width
        return (

            <Image source={require('./images/omnicsbg_small.png')}
                resizeMode="stretch"
                style={{ width: null, height: null, flex: 1 }}>

                <View style={{marginTop:1, borderWidth:2,backgroundColor: 'rgba(0,0,0,0.4)', flexDirection: 'row' }}>
                    <View style={{ marginTop: 80, marginLeft: 40, marginBottom: 10, alignSelf: 'center' }}>
                        <Image
                            source={{ uri: this._parseGeneralPlayerIcon() }}
                            style={styles.playericon}
                            />
                        <View>
                            <Text style={{ fontSize: 30, fontFamily: 'koverwatch' }}>{this._parseGeneralUsername()}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 75, marginLeft: 90 }}>
                        <View style={{ flexDirection: 'row' }}>
                            {this.renderPlayerLevel()}
                            <Text style={{ fontFamily: 'koverwatch', fontSize: 20, alignSelf: 'center' }}>Level {this._parseGeneralLevel()}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {this.renderPlayerRank()}
                            <Text style={{ fontFamily: 'koverwatch', fontSize: 20, alignSelf: 'center' }}>Rank {this._parseGeneralRank()}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: 'black' }}>
                    <TouchableOpacity style={{flex:1}}>
                        <View style={{ backgroundColor: '#2a6186', justifyContent:'center', alignItems:'center',height:30,borderColor:'#00c3ff',borderWidth:2 }}>
                            <Text style={{fontFamily:"koverwatch", color:"white"}}>Quickplay</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}}>
                        <View style={{ backgroundColor:'#2a6186', justifyContent:'center', alignItems:'center',height:30,borderColor:'#00c3ff',borderWidth:2 }}>
                            <Text style={{fontFamily:"koverwatch", color:"white"}}>Competitive</Text>
                        </View>

                    </TouchableOpacity>
                </View>



            </Image>

        );
    }

    /* ---prebuilt buttons. 
        <View style={{flexDirection:'row',alignSelf:'center',backgroundColor:'black'}}>
                        <Button style={{flex:1,width:600}} title="Quickplay"/>
                        <View/>
                        <Button style={{flex:1}} title="Competitive"/> 
                    </View>
    
     */



    renderPlayerHeader() {
        <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', flexDirection: 'row' }}>
            <View style={{ marginTop: 80, marginLeft: 40, marginBottom: 10, alignSelf: 'center' }}>
                <Image
                    source={{ uri: this._parseGeneralPlayerIcon() }}
                    style={styles.playericon}
                    />
                <View>
                    <Text style={{ fontSize: 30, fontFamily: 'koverwatch' }}>{this._parseGeneralUsername()}</Text>
                </View>
            </View>
            <View style={{ marginTop: 75, marginLeft: 90 }}>
                <View style={{ flexDirection: 'row' }}>
                    {this.renderPlayerLevel()}
                    <Text style={{ fontFamily: 'koverwatch', fontSize: 20, alignSelf: 'center' }}>Level {this._parseGeneralLevel()}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {this.renderPlayerRank()}
                    <Text style={{ fontFamily: 'koverwatch', fontSize: 20, alignSelf: 'center' }}>Rank {this._parseGeneralRank()}</Text>
                </View>
            </View>
        </View>

    }
    renderPlayerIcon() {
        return (
            <View style={{ marginLeft: 30, marginTop: 80, marginBottom: 10, alignSelf: 'center' }}>
                <Image
                    source={{ uri: this._parseGeneralPlayerIcon() }}
                    style={styles.playericon}
                    />
                <View>
                    <Text style={{ fontSize: 30, fontFamily: 'koverwatch' }}>{this._parseGeneralUsername()}</Text>
                </View>
            </View>
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
            </View>
        )
    }

    _parseGeneralLevel() {
        return this.state.message.data.level;
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
        height: 80,
        width: 80,
        opacity: 1,
    },
});



