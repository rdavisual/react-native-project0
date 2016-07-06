/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator,
   TouchableHighlight
 } from 'react-native';

 import Login from './src/components/login/loginView';
 // import Dashboard from './src/components/dashboardView';
 import Tabs from './src/components/tabs/tabs';


 const NavigatorBarRouterMapper = {
     LeftButton: (route, navigator, index) => {        //MAYUSCULAS
         if (index === 0) {
             return null;
         }
         return (
             <TouchableHighlight onPress={() => {
                 if (index > 0) {
                     navigator.pop();
                 }
             } }>
                 <Text style={{marginTop: 10, marginLeft: 20, color: '#007AFF'}}>Back</Text>
             </TouchableHighlight>
         );
     },
     RightButton: (route, navigator, index) => {
         return null;
     },
     Title:  (route, navigator, index) => {
         if (route.name === 'Login' || route.name === 'Dashboard') {
             return null;
         }
         return (
             <Text style={{marginTop:10, color: '#007AFF'}}>{route.name}</Text>
         );
     },

 };

 class Project0 extends Component {
     renderScene(route, navigator) {
         switch (route.name) {
             case 'Login':
                 return (
                     <Login {...route.props} navigator={navigator} route={route} />
                 );
             case 'Dashboard':
                 return (
                     <Tabs {...route.props} navigator={navigator} route={route} />
                 );
            //  case 'Details':
            //      return (
            //          <ComicDetailView {...route.props} navigator={navigator} route={route} />
            //      );
             default:
                 return null;
         }
     }
     render() {
         return (
             <Navigator
                 style={{backgroundColor: '#fff'}}
                 initialRoute={{name:'Login'}}
                 renderScene={this.renderScene}
                 configureScene={(route) => {
                     if (route.sceneConfig) {
                         return route.sceneConfig;
                     }
                     return Navigator.SceneConfigs.FloatFromRight;    //animacion
                 }}
                 navigationBar={
                     <Navigator.NavigationBar routeMapper={NavigatorBarRouterMapper} />
                 }
             />
         );
     }
 }

AppRegistry.registerComponent('Project0', () => Project0);