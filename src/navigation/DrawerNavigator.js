import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { HomeScreen, Screen1, Screen2, Screen3, Screen4 } from '../screens';
import ContentComponent from '../components/ContentComponent';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    initialRouteName: 'Home',
    drawerWidth: WIDTH*0.83,
    drawerPosition: 'left',
    contentComponent: ContentComponent
};

const MyDrawerNavigator = createDrawerNavigator({
    Home: { 
        screen: HomeScreen,
    },
    Contact: {
        screen: Screen1
    },
    Group: {
        screen: Screen2
    },
    Settings: {
        screen: Screen3
    },
    About: {
        screen: Screen4
    }
},
    DrawerConfig
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component{
    render(){
        return(
            <AppContainer />
        );
    }
}