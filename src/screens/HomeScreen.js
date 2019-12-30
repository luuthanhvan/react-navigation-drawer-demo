import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';

export default class HomeScreen extends Component{
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (<Icon name = 'home'/>)
    };

    render(){
        return(
            <View style = { styles.container }>
                <Text style = { styles.text }> This is home screen </Text>
                <TouchableHighlight 
                    style = { styles.touchStyle }
                    onPress = {() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    underlayColor = {'rgba(0,0,0,0.8)'}
                >
                    <Icon name = 'menu'/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 26,
        color: 'pink'
    },
    touchStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 10
    },
    open: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});