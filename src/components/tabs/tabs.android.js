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

const iconDashboard = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEEUlEQVR4Xu2c0W3VQBQFN4VQCWXAByWCRCPUQSGgSPnMxx6Nz761d/j2XHvvzHMSQHkb/jl6A29Hn97DDwM4PAIDMIDDN3D48X0DGMDhGzj8+L4BDODwDRx+fN8ABnD4Bg4/vm8AAzh8A4cf3zeAARy+gcOP7xvAAPAG/uEJawb8GmP8mLzV7zHGt8lrX30Z+hAj+OPkBvDaBJBDBBvAa81/3B05RLABGMD7BvwS8NoO0IcYwb4BXmveLwHZ/v0p4JN9+Qb4PCJ/DAw+XH4PECyrcCn6ECPY7wEKOvORyCGCDSC3VSCQQwQbQEFnPhI5RLAB5LYKBHKIYAMo6MxHIocINoDcVoFADhFsAAWd+UjkEMEGkNsqEMghgg2goDMfiRwi2AByWwUCOUSwARR05iORQwQbQG6rQCCHCDaAgs58JHKIYAPIbRUI5BDBBlDQmY9EDhFsALmtAoEcItgACjrzkcghgg0gt1UgkEMEG0BBZz4SOUSwAeS2CgRyiGADKOjMRyKHCDaA3FaBQA4RbAAFnflI5BDBDw4g13BTwgBuKu6qxzaAqzZ50zkGcFNxVz22AVy1yZvOMYCbirvqsQ3gqk3edI4B3FTcVY9tAFdt8qZzDOCm4q56bAP4fJNfxxhfrlpyec5PMt8APt+evyMoqMrfERQsq3Ap+hAj+MH/GOQbICjVN0CwrMKl6EOMYN8ABZ35SOQQwQaQ2yoQyCGCDaCgMx+JHCLYAHJbBQI5RLABFHTmI5FDBBtAbqtAIIcI/jjM98KhGiP/jjH+TA727wEmF/XUywzgqWYnz2UAk4t66mUG8FSzk+cygMlFPfUyA3iq2clzGcDkop56mQE81ezkuQxgclFPvcwAnmp28lwGMLmo98v8H0HBsgqXor/OR7D/GFTQmY9EDhFsALmtAoEcItgACjrzkcghgg0gt1UgkEMEG0BBZz4SOUSwAeS2CgRyiGADKOjMRyKHCDaA3FaBQA4RbAAFnflI5BDBBpDbKhDIIYINoKAzH4kcItgAclsFAjlEsAEUdOYjkUMEG0Buq0Aghwg2gILOfCRyiGADyG0VCOQQwQZQ0JmPRA4RbAC5rQKBHCLYAAo685HIIYINILdVIJBDBBtAQWc+EjlEsAHktgoEcohgAyjozEcihwg2gNxWgUAOEWwABZ35SOQQwQaQ2yoQyCGCDaCgMx+JHCLYAHJbBQI5RLABFHTmI5FDBBtAbqtAIIcINoCCznwkcojg/FkldtuAAexmZPHzGMDihe92OwPYzcji5zGAxQvf7XYGsJuRxc9jAIsXvtvtDGA3I4ufxwAWL3y32xnAbkYWP48BLF74brczgN2MLH4eA1i88N1uZwC7GVn8PAaweOG73c4AdjOy+Hn+A03mApB42WxdAAAAAElFTkSuQmCC';
const iconHeroes = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEiUlEQVR4Xu2dobIVORCGfxwO3OIAh0TuI6zEooAnAMkjIOEJYNXalTwCEokDHDhwSCpUUXWAcyY9SXqSrv7G3qTT/fc3f+bcm3vmirhSK3AldfUULwBIDgEAAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXv4oDvJL0oNKL25I+BOnXLUnvK7n+K+nh7HoAwKcDALBTVxxgp2CjhuMAo5T8NQ4OsFNXHGCnYKOG4wCjlMQBupTEAbrka5+MA7RrtzWTZ4Cduj6V9E9lTvnMXIS9dH2T9Gbnuq3D/5Z0dWNy+X1FcbWt67WkZ60JjJq3igNY6imi3twY+LECiGUN65iVcrHmfHYcALTJBwBtunXNWkn0lXLpEhUHaJMPANp065q1kugr5dIlKg7QJh8AtOnWNWsl0VfKpUtUHKBNPgBo0+3irHuS7lZiPpF0bWPMV0nPB+d1KdyIXN5K+v+gfC8us4oDWP4WMFur0etzIuhEUQAYjZcxHg5gFMphGA6AA3Ao9CcDbAEOFmMJyRZgUclnDFsAWwBbAFuAj7uYox6xBZSTPuXEz9Z1R9JflTH3JX3aGHND0n/myvsGjsjls6R3lTTKiaFycsjtOgKAcpTr5YAKav8aZjmHNyCNHyGOyuWR4WhZV00A0CYfAOzQDQfYIdZvQ3GAE0GOuuss7ToqFwAAgOrxcguwF8fwDNAmHw6wQzeeAXaIxTPAZbGOuuss7Toql+WfAY787G1pTMYxNRg3Nel9BgCA+cgBwPweTM0AAKbKP39xAJjfg6kZAMBU+ecvDgDzezA1AwCYKv/8xZcHwHLwwXIgZL7UYzMYpcvyAFgOP3Iq+DxcFl0AYOyNeVi0UTcGABzWsrELAcCJnharGyv//GgAAADV/wuw3BhsAfNv5qYMcAAcAAf4yYDF6ppus4Un4QA7HeCFpC8LN/Q0teuSHldyBYCdAHQ97BwMjuWgDAAAAM8Ae54BcIDzNtalyxFnApewOraA8woAgA8ZPAOc6IoDnIdsCV1wABygS4EwVtdV5f7JYXTpdYDy4qTyAqWtq3ytS+2rUMqJoPIVL1tX+X7e8guWnsvyoibLC6xqOVheGjVKl/KirPLCrKarF4CmRRsn1b6h2xJ21L5bW+vIF1jVctn8OQD8Kc+Iv0sAQBeW5yfjAA6i4gA4gANWPiFxAAddcQAcwAErn5A4gIOuOAAO4IAVIcMoEMkBwogaKVEAiNQth1wBwEHUSCEBIFK3HHIFAAdRI4UEgEjdcsgVABxEjRQSACJ1yyFXAHAQNVJIAIjULYdcAcBB1EghASBStxxyBQAHUSOFBIBI3XLIFQAcRI0UEgAidcshVwBwEDVSSACI1C2HXAHAQdRIIQEgUrcccgUAB1EjhQSASN1yyBUAHESNFBIAInXLIVcAcBA1UkgAiNQth1wBwEHUSCEBIFK3HHL9DhV2TJDcJ9e6AAAAAElFTkSuQmCC';
const styles = StyleSheet.create({
  pageStyle1: {
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: 'rgba(0,255,0,.3)'
  },
  pageStyle2: {
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: 'rgba(0,100,255,.3)'
  },
  toolbar: {
    height: 56,
    backgroundColor: '#e9eaed',
  }
});
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
                    <DashboardView />
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
