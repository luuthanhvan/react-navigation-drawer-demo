import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Screen2 extends Component{
    static navigationOptions = {
        drawerLabel: 'Group',
        drawerIcon: () => (<Icon name = 'group'/>)
    };

    render(){
        return(
            <View style = { styles.container }>
                <Text style = { styles.text }> This is screen 2 </Text>
                <TouchableHighlight 
                    style = { styles.touchStyle }
                    onPress = {() => this.props.navigation.goBack()}
                    underlayColor = {'#f1f1f1'}
                >
                   <Icon name = 'arrow-back'/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    touchStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 10,
        top: 10
    }
});