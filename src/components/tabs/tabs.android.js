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
        const navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
          );
        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>

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
                    <View>
                        {/*<ToolbarAndroid title="Hero" style={styles.toolbar} />*/}
                        <View  style={{backgroundColor: 'rgba(0,0,0,.8)', flex: 1}}>
                            <Text style={{marginTop:50, textAlign: 'center', color: 'red' }}>ola</Text>
                        </View>
                    </View>
                </ViewPagerAndroid>

            </DrawerLayoutAndroid>
        );
    }
}

export default Tabs;
