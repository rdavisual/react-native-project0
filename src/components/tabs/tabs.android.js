import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  ActivityIndicator,
  ToolbarAndroid,
  ViewPagerAndroid
} from 'react-native';

import DashboardView from '../dashboard/dashboardView';
import HeroesView from '../heroes/heroesView';

// const styles = StyleSheet.create({
//   pageStyle1: {
//     alignItems: 'center',
//     marginTop: 50,
//     padding: 20,
//     backgroundColor: 'rgba(0,255,0,.3)'
//   },
//   pageStyle2: {
//     alignItems: 'center',
//     marginTop: 50,
//     padding: 20,
//     backgroundColor: 'rgba(0,100,255,.3)'
//   },
//   toolbar: {
//     height: 56,
//     backgroundColor: '#e9eaed',
//   }
// });
class Tabs extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 'Dashboard'
        };
    }
    onActionSelected(position) {
      if (position === 0) { // index of 'Settings'
        showSettings();
      }
    }
    render() {
        return(
            <ViewPagerAndroid
                style={{flex: 1}}
                initialPage={0}>
                <View >
                    {/*<ToolbarAndroid title="Dash" style={styles.toolbar}/>*/}
                    <DashboardView navigator={this.props.navigator} />
                </View>
                <View>
                    {/*<ToolbarAndroid title="Hero" style={styles.toolbar} />*/}
                    <HeroesView />
                </View>
            </ViewPagerAndroid>
        );
    }
}

export default Tabs;
