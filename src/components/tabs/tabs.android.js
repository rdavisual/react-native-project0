import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  DrawerLayoutAndroid,
  ActivityIndicator,
  ToolbarAndroid,
  ViewPagerAndroid
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import DashboardView from '../dashboard/dashboardView';
import HeroesView from '../heroes/heroesView';

class Tabs extends Component{
    constructor(props){
        super(props);
    }

    render() {
      return (
        <ScrollableTabView
          style={{marginTop: 20}}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />} >
          <ScrollView tabLabel='Dashboard'>
            <DashboardView navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView tabLabel='Heroes'>
            <HeroesView />
          </ScrollView>
        </ScrollableTabView>
      );
    }
}

export default Tabs;
