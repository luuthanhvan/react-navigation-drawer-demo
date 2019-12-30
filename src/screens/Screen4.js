import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Screen4 extends Component{
    static navigationOptions = {
        drawerLabel: 'About',
        drawerIcon: () => (<Icon name = 'info'/>)
    };

    render(){
        return(
            <View style = { styles.container }>
                <Text style = { styles.text }> This is screen 4 </Text>
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
        backgroundColor: 'orange'
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    touchStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 10,
        top: 10
    }
});