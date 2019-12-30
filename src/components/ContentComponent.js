import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const WIDTH = Dimensions.get('window').width;

export default class ContentComponent extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <TouchableOpacity activeOpacity = {1} style = {styles.drawerTransparent}>
                <TouchableOpacity activeOpacity = {1} style = {styles.drawer}>
                    <ScrollView>
                        <View style = {styles.header}>
                            <Image source = {require('../../assets/minion.jpg')} style = {styles.headerImage}/>
                            <Text style = {[styles.text, {color: 'white'}]}> My profile </Text>
                        </View>

                        <TouchableHighlight underlayColor = {'rgba(0,0,0,0.2)'}
                            onPress = {() => navigate('Contact')}>
                            <View style = {styles.row}>
                                <Icon name = 'contacts'/>
                                <Text style = {styles.text}> Contact </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor = {'rgba(0,0,0,0.2)'}
                            onPress = {() => navigate('Group')}>
                            <View style = {styles.row}>
                                <Icon name = 'group'/>
                                <Text style = {styles.text}> Group </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor = {'rgba(0,0,0,0.2)'}
                            onPress = {() => navigate('Settings')}>
                            <View style = {styles.row}>
                                <Icon name = 'settings'/>
                                <Text style = {styles.text}> Settings </Text>
                            </View>
                        </TouchableHighlight>

                        <View style = { styles.line } />

                        <TouchableHighlight underlayColor = {'rgba(0,0,0,0.2)'}
                            onPress = {() => navigate('About')}>
                            <View style = {styles.row}>
                                <Icon name = 'info'/>
                                <Text style = {styles.text}> About </Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    drawerTransparent: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    drawer: {
        flex: 1,
        width: WIDTH*0.83,
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 200,
        backgroundColor: '#6195ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImage: {
        borderRadius: 100,
        width: 75,
        height: 75
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 10
    },
    menu: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#111'
    },
    line: {
        width: '90%',
        alignSelf: 'center',
        height: 1,
        backgroundColor: 'gray',
        margin: 15
    }
});